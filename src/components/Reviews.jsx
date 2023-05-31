import { getReviews } from "../api";
import { useState,useEffect } from "react";
import RenderReview from "./RenderReview";

function Reviews() {

    const [reviews, setReviews] = useState([{}])

    let uniqueID = 0;
    
    useEffect (() => {
        getReviews().then((data) => {
            setReviews([...data])
        })
    }, [])

    return (
  <>
    <h2> Reviews</h2>
    <ul>
    {console.log(reviews)}
    
    {reviews.map((review) => {
        uniqueID++;
        return (<li key={uniqueID}><RenderReview review={review}/></li>)
    })}
    </ul>
  </>
    )
  }
  


  export default Reviews
  