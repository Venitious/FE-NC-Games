import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import '../App.css'
import Home from "./Home";
import Header from "./Header";
import Reviews from "./Reviews";
import SingleReview from "./SingleReview";
import Login from "./Login";
import { UserContext } from "./Users";



function App() {

  const [user, setUser] = useState("Please login and select your username")
    

  return (<>
  <BrowserRouter>
    <UserContext.Provider value={user}>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/reviews" element = {<Reviews/>}/>
        <Route path = "reviews/:id" element = {<SingleReview/>}/>
        <Route path = "/login" element = {<Login setUser={setUser}/>}/>
      </Routes>
    </UserContext.Provider>
  </BrowserRouter>
  </>
  )
}

export default App
