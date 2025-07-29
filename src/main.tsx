import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ForAdvisors from './pages/ForAdvisors.tsx'
import TripsPage from './pages/TripsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/for-advisors" element={<ForAdvisors />} />
        <Route path="/trips" element={<TripsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
