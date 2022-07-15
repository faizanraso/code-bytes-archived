import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './components/LandingPage'
import CodeEnvironment from './components/CodeEnvironment';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='code/:projectID' element={<CodeEnvironment/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
