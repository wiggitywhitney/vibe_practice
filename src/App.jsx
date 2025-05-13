import './App.css'
// import { AddSpiderButton } from './components/AddSpiderButton' // Incorrect named import
import AddSpiderButton from './components/AddSpiderButton'; // Corrected to default import
import Rainbow from './components/Rainbow'

function App() {
  // For now, let's hardcode isSpiderPresent for testing
  // Later, this would come from state
  const isSpiderPresent = false; 

  return (
    <div className="app-container">
      <div className="rainbow-layout">
        <Rainbow isSpiderPresent={isSpiderPresent} />
        <AddSpiderButton />
      </div>
    </div>
  )
}

export default App
