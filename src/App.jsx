
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import Planner from './components/Planner'
import Inspiration from './components/Inspiration'

const App = () => {
   return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/inspiration" element={<Inspiration />} />
      </Routes>
    </>
  )
}

export default App