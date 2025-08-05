import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.tsx'
import ForAdvisors from './pages/ForAdvisors.tsx'
import TripsPage from './pages/TripsPage.tsx'
import TripDetailPage from './pages/TripDetailPage.tsx'
import TermsOfService from './pages/TermsOfService.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import AboutUs from './pages/AboutUs.tsx'
import HotelsPage from './pages/HotelsPage.tsx'
import DestinationsPage from './pages/DestinationsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/for-advisors" element={<ForAdvisors />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/trips/:id/:slug" element={<TripDetailPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
