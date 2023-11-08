import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Herodetails from './Pages/Herodetails'
import Footer from '../Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  return (
  <>
  <Router>
<Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/:heroName' element={<Herodetails/>}/>
    </Routes>
    <Footer />
  </Router>
  </>
  )
}

export default App;
