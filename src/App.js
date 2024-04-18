import './App.css';
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Timeline from './Pages/Timeline/Timeline'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
