import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import '../App.css'
import Home from "./Home";
import Header from "./Header";
import Reviews from "./Reviews";

function App() {

  return (<>
  <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path = "/" element = {<Home/>} />
        <Route  path = "/reviews" element = {<Reviews/>}/>
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
