import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SlotsPage } from './pages/SlotsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/slots" element={<SlotsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
