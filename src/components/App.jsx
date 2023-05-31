import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import '../App.css'
import Home from "./Home";
import Header from "./Header";
import Reviews from "./Reviews";
import SingleReview from "./SingleReview";


function App() {

  return (<>
  <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path = "/" element = {<Home/>} />
        <Route  path = "/reviews" element = {<Reviews/>}/>
        <Route path = "reviews/:id" element = {<SingleReview/>}/>
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
