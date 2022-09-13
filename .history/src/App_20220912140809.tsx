import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
const App = () => {
  return (
  <Container>
 <Routes>
  <Route path="/" element={<Home/}/>
  <Route path="/" element={<Store/}/>
  <Route path="/" element={</}/>
 </Routes>
  </Container>
  )
}

export default App
