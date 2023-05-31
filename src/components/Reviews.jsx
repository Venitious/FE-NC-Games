import { getReviews } from "../api";
import { useState,useEffect } from "react";
import RenderReview from "./RenderReview";

function Reviews() {

    const [reviews, setReviews] = useState([{}])

    const [isLoading, setIsLoading] = useState(false)

    let uniqueID = 0;
    
    useEffect (() => {
        setIsLoading(true)
        getReviews().then((data) => {

            setIsLoading(false)
            return setReviews([...data])
        })
    }, [])

    if (isLoading) {
        return (
        <>
            <p>Loading reviews...</p>
        </>
        )
    }

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
  