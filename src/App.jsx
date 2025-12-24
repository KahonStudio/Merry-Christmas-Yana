import HeroSection from './components/HeroSection'
import MessageSection from './components/MessageSection'
import OrientationPrompt from './components/OrientationPrompt'
import './App.css'

function App() {
  return (
    <div className="app">
      <OrientationPrompt />
      <HeroSection />
      <MessageSection />
    </div>
  )
}

export default App
