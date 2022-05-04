import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
import Error from './pages/Error'
import EmployeeList from './pages/EmployeeList'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
