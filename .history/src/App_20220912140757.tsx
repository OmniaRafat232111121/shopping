import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
const App = () => {
  return (
  <Container>
 <Routes>
  <Route path="/" element={<Home/}/>
  <Route path="/" element={</}/>
  <Route path="/" element={<Home/}/>
 </Routes>
  </Container>
  )
}

export default App
