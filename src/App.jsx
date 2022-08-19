import React from 'react'
import Business from './components/Business'
import Clients from './components/Clients'
import Header from './components/Header'
import Hero from './components/Hero'
import Team from './components/Team'
import WhyUs from './components/WhyUs'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    
    <Routes>
      <Route path='/studio' element={
        <>
          <Header />
          <Hero />
          <Business />
          <WhyUs />
          <Clients />
          <Team />
        </>
      } />
    </Routes>

  )
}
