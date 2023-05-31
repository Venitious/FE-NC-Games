import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviewById } from '../api';

function SingleReview() {

    const [review, setReview] = useState({})
    const { id } = useParams(); 

    useEffect(() => {
        getReviewById(id).then((currReview) => {
            setReview({...currReview})
        })
    }, [])

    console.log(review)
    return (
    <>
    <h2>{review.title}</h2>
    <img src={review.review_img_url} alt={review.title}/>
    <p>{review.review_body}</p>
    <h3>Additional Information: </h3>
    <ul>
        <li> Owner: {review.owner}</li>
        <li> Designer: {review.designer}</li>
        <li> Category: {review.category}</li>
        <li> Votes: {review.votes}</li>
    </ul>
    </>
    )
  }
  
  export default SingleReview
  