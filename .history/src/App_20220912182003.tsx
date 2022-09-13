import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
import {Home} from './pages/Home'
import {About }from './pages/About'
import {Store}from './pages/Store'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <S>
    <Navbar/>
  <Container>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/store" element={<Store />} />
 <Route path="/about" element={<About />} />
 </Routes>
  </Container>
  </S>
  )
}

export default App
