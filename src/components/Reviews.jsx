import { getReviews } from "../api";
import { useState,useEffect } from "react";
import RenderReview from "./RenderReview";

function Reviews() {

    const [reviews, setReviews] = useState([{}])
    let uniqueID = 0;
    
    useEffect (() => {
        getReviews().then((data) => {
            return setReviews([...data])
        })
    }, [])

    return (
  <>
    <h2> Reviews</h2>
    <ul>
    {reviews.map((review) => {
        uniqueID++;
        return <li key={uniqueID}><RenderReview review={review}/></li>
    })}
    </ul>
  </>
    )
  }
  
  export default Reviews
  