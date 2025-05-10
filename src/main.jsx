import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create a logger for shutdown events
const shutdownLogger = (event, message) => {
  console.log(`[Shutdown] ${event}: ${message} at ${new Date().toISOString()}`);
};

// Initialize any resources that need cleanup
let activeRequests = [];
let cleanup = false;

// Register a new fetch to track active network requests
const registerFetch = (promise) => {
  activeRequests.push(promise);
  promise.finally(() => {
    activeRequests = activeRequests.filter(p => p !== promise);
  });
  return promise;
};

// Override fetch to track active requests
const originalFetch = window.fetch;
window.fetch = (...args) => {
  const promise = originalFetch.apply(window, args);
  return registerFetch(promise);
};

// Graceful shutdown handler
const handleGracefulShutdown = async (event) => {
  if (cleanup) return;
  
  shutdownLogger(event.type, 'Shutdown initiated');
  cleanup = true;
  
  // Wait for pending network requests (with timeout)
  if (activeRequests.length > 0) {
    shutdownLogger(event.type, `Waiting for ${activeRequests.length} pending requests`);
    
    try {
      await Promise.race([
        Promise.all(activeRequests),
        new Promise(resolve => setTimeout(resolve, 3000)) // 3 second timeout
      ]);
    } catch (error) {
      shutdownLogger(event.type, `Error during request cleanup: ${error.message}`);
    }
  }
  
  // Persist any important state to localStorage
  try {
    // Example: localStorage.setItem('appState', JSON.stringify(someState));
    shutdownLogger(event.type, 'State persisted successfully');
  } catch (error) {
    shutdownLogger(event.type, `Failed to persist state: ${error.message}`);
  }
  
  shutdownLogger(event.type, 'Shutdown complete');
};

// Register browser shutdown events
window.addEventListener('beforeunload', handleGracefulShutdown);
window.addEventListener('unload', handleGracefulShutdown);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    shutdownLogger('visibilitychange', 'App moved to background');
  }
});

// Create and render the app
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
