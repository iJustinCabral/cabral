import './App.css';
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Timeline from './Pages/Timeline/Timeline'
import Blog from './Pages/Blog/Blog'
import BlogPost from './Pages/Blog/BlogPost'
import Admin from './Pages/Admin/Admin'
import PostEditor from './Pages/Admin/PostEditor'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/new" element={<PostEditor />} />
        <Route path="/admin/edit/:slug" element={<PostEditor />} />
        <Route path="/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
