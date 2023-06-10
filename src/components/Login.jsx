import { useState, useEffect } from "react";
import { getUsers } from "../api";

function Login({setUser}) {

    const [users, setUsers] = useState([{}]);
    const [isLoading, setIsLoading] = useState(false)
    let count = 0

    useEffect(() => {
        setIsLoading(true)
        getUsers().then((data) => {
            setUsers([...data])
            setIsLoading(false)
        })
    }, [])

    function handleClick (username) {
        setUser(`${username}`)
    }

    if (isLoading) {
        return <p>Usernames Loading...</p>
    }

     return (
    <>
    {users.map((user) => {
        count++
        return (         
        <button key={count} onClick={function (event) {
            event.preventDefault()
            handleClick(user.username)
        }}>{user.username}</button> 
        )
    })}
    </>
    )
  }
  
  export default Login
  