import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.tsx'
import type { PathItems } from './components/NavBar/types.ts'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Projects from './pages/Projects.tsx'
import Home from './pages/Home.tsx'

const paths: PathItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function App() {
  return (
    <main className="bg-slate-300/20 min-h-screen pb-10">
      <BrowserRouter>
        <NavBar paths={paths} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
