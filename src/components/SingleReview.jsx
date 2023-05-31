import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCommentsByReviewId, getReviewById } from '../api';
import RenderComments from './RenderComments';

function SingleReview() {

    const [review, setReview] = useState({})
    const [comments, setComments] = useState([])
    const { id } = useParams(); 
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        getReviewById(id).then((currReview) => {
            setReview({...currReview})
            setIsLoading(false)
        }).then(() => {
            getCommentsByReviewId(id).then((currComments) => {
                setComments([...currComments])
            })
        })
    }, [])


    if (isLoading) {
        return <p>Review Loading...</p>
    }

    if (comments.length === 0) {
        return (
            <>
            <section className="review">
                <h2>{review.title}</h2>
                <img className="reviewImg"src={review.review_img_url} alt={review.title}/>
                <p className="reviewBody">{review.review_body}</p>
                <h3>Additional Information: </h3>
                <ul className="reviewInfo">
                    <li> Owner: {review.owner}</li>
                    <li> Designer: {review.designer}</li>
                    <li> Category: {review.category}</li>
                    <li> Votes: {review.votes}</li>
                </ul>
            </section>
            <section className="commentsClass">
            <h3 className="commentHeader">Comments </h3>
            <p>No comments have been posted on this thread</p>
            </section>
            </>
            )
    }

    return (
    <>
    <section className="review">
        <h2>{review.title}</h2>
        <img className="reviewImg"src={review.review_img_url} alt={review.title}/>
        <p className="reviewBody">{review.review_body}</p>
        <h3>Additional Information: </h3>
        <ul className="reviewInfo">
            <li> Owner: {review.owner}</li>
            <li> Designer: {review.designer}</li>
            <li> Category: {review.category}</li>
            <li> Votes: {review.votes}</li>
        </ul>
    </section>
    <section className="commentsClass">
    <h3 className="commentHeader">Comments </h3>
    <ul>
    {comments.map((comment) => {
        return <li key={comment.comment_id}><RenderComments comment={comment}/></li>
    })}
    </ul>
    </section>
    </>
    )
  }
  
  export default SingleReview
  