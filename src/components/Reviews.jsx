import { getReviews } from "../api";
import { useState,useEffect } from "react";
import RenderReview from "./RenderReview";

function Reviews() {

    const [reviews, setReviews] = useState([{}])
    
    useEffect (() => {
        getReviews().then((data) => {
            return setReviews([...data])
        })
    }, [])

    return (
  <>
    <h2> All Gaming Reviews</h2>
    <ul>
    {reviews.map((review) => {
        return <li key={review.review_id}><RenderReview review={review}/></li>
    })}
    </ul>
  </>
    )
  }
  
  export default Reviews
  