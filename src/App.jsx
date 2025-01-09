import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/signup'
import Dashbord from './pages/Dashbord'
import Projects from './pages/Projects'

export default function App() {
  return (
   <BrowserRouter >
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashbord" element={<Dashbord/>}/>
    <Route path="/project" element={<Projects/>}/>
  
   </Routes>

   </BrowserRouter>
  )
}
