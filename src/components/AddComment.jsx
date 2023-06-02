import { useContext, useState } from "react"
import { postComment } from "../api"
import { useParams } from "react-router-dom"
import { UserContext } from "./Users";



function AddComment({setIsLoadingComment}) {

    const [comment, setComment] = useState()

    const { id } = useParams(); 

    const user = useContext(UserContext)
    

    function handleSubmit (event) {
        event.preventDefault()

        const dataToPost = {username: user, body: comment}

        postComment(id, dataToPost).then((data) => {
            setIsLoadingComment(true)
        }).catch((err) => {
            console.log(err)
        })     
    }    

    function handleFakeSubmit (event) {
        event.preventDefault()
    }
    
    if (user === "Please login and select your username") {
        return (
            <>
            <h3 className="commentHeader">Add Comment</h3>
            <form onSubmit={handleFakeSubmit}>
                <label>
                <textarea rows={4} cols={60} onChange={e => setComment(e.target.value)} defaultValue="Login and select a username then you will be able to post comments!"></textarea>
                </label>
                <br></br>
                <button>Submit</button>
            </form>
            </>
            )
        }

    return (
    <>
    <h3 className="commentHeader">Add Comment</h3>
    <form onSubmit={handleSubmit}>
        <label>
        <textarea rows={4} cols={60} onChange={e => setComment(e.target.value)} defaultValue="Type in here"></textarea>
        </label>
        <br></br>
        <button>Submit</button>
    </form>
    </>
    )
  }
  
  export default AddComment
  