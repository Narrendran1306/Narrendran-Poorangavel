import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"
import CertificatesPage from "./pages/CertificatesPage"
import ContactPage from "./pages/ContactPage"
import Journey from "./components/Journey/journey"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
