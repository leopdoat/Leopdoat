import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import Experiences from './pages/Experiences.tsx'


const rootElement = document.getElementById('root')!
createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Leopdoat/" element={<App />} />
        <Route path="/Leopdoat/experiences" element={<Experiences />} />
        <Route path='*' element={<App />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
)
