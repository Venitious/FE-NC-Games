import { useState, useEffect } from "react"
import { patchVotesByID } from "../api";
import { useParams } from "react-router-dom";

function RenderReviewInformation({review}) {

    const { id } = useParams(); 

    const [votesChange, setVotesChange] = useState(0);   
    const [error, setError] = useState("") 

    const errMsg = "Your vote cannot be registered at this moment, please try again later, whilst we are trying to resolve this issue"

    function upVote () {
        setVotesChange((currentVotesChange) => {
           return currentVotesChange + 1;
        })
        const votesUpdate = {inc_votes : 1}
        patchVotesByID(id, votesUpdate)
        .catch(() => {
            setVotesChange((currentVotesChange) => {
                setError(errMsg)
                return currentVotesChange -1; 
            })
        })
    }

    function downVote () {
        setVotesChange((currentVotesChange) => {
            return currentVotesChange - 1;
         })
         const votesUpdate = {inc_votes : -1}
         patchVotesByID(id, votesUpdate)
         .catch(() => {
             setVotesChange((currentVotesChange) => {
                setError(errMsg)
                 return currentVotesChange +1; 
             })
         })
     }

    return (
        <section className="review">
            <h2>{review.title}</h2>
            <img className="reviewImg"src={review.review_img_url} alt={review.title}/>
            <p className="reviewBody">{review.review_body}</p>
            <h3>Additional Information: </h3>
            <div className="reviewInfo">
                <p> Owner: {review.owner}</p>
                <p> Designer: {review.designer}</p>
                <p> Category: {review.category}</p>
                <p> Votes: {review.votes + votesChange}</p>
                <button onClick={upVote} > Upvote </button>
                <button onClick={downVote}> DownVote</button>
                <p className="error"><u>{error}</u></p>
            </div>
        </section>
    )
  }
  
  export default RenderReviewInformation
  
  