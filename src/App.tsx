import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import { MainPage } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
