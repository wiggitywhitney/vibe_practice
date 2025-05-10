// server.js - Health monitoring server for containerization
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Set port from environment or default to 3001 (separate from Vite's 8080)
const PORT = process.env.HEALTH_PORT || 3001;

// Track server health status
let serverHealth = {
  status: 'healthy',
  startTime: new Date().toISOString(),
  shutdownInProgress: false
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(serverHealth.shutdownInProgress ? 503 : 200).json(serverHealth);
});

// Status update endpoint
app.post('/health', (req, res) => {
  if (req.body && req.body.status) {
    serverHealth = { ...serverHealth, ...req.body };
    res.status(200).json({ message: 'Health status updated', serverHealth });
  } else {
    res.status(400).json({ message: 'Invalid health status update' });
  }
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Health monitoring server running on port ${PORT}`);
});

// Graceful shutdown handler
const gracefulShutdown = (signal) => {
  console.log(`${signal} received - initiating graceful shutdown`);
  
  // Mark server as shutting down
  serverHealth.shutdownInProgress = true;
  serverHealth.shutdownSignal = signal;
  serverHealth.shutdownTime = new Date().toISOString();
  
  // Give active connections a chance to finish (timeout after 10 seconds)
  setTimeout(() => {
    console.log('Closing server connections');
    server.close(() => {
      console.log('Server connections closed successfully');
      process.exit(0); // Success exit code
    });
  }, 2000);
  
  // Force exit after timeout in case connections don't close
  setTimeout(() => {
    console.error('Forcing server shutdown after timeout');
    process.exit(1); // Error exit code for timeout
  }, 10000);
};

// Register signal handlers
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle unexpected errors
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  // Update health status
  serverHealth.status = 'unhealthy';
  serverHealth.error = error.message;
  // Exit with error code
  process.exit(1);
}); 