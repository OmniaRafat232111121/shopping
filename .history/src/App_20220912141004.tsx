import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
const App = () => {
  return (
  <Container>
 <Routes>
  <Route path="/" element={<Home/t/}/>
 </Routes>
  </Container>
  )
}

export default App
