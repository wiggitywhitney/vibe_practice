import './App.css'
import { AddSpiderButton } from './components/AddSpiderButton'
import Rainbow from './components/Rainbow'

function App() {
  return (
    <div className="app-container">
      <div className="rainbow-layout">
        <Rainbow />
        <AddSpiderButton />
      </div>
    </div>
  )
}

export default App
