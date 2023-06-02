import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCommentsByReviewId, getReviewById } from '../api';
import RenderReviewInformation from './RenderReviewInformation';
import RenderNoComments from './RenderNoComments';
import RenderComments from './RenderComments';

function SingleReview() {

    const [review, setReview] = useState({})
    const [comments, setComments] = useState()
    const { id } = useParams(); 
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingComment, setIsLoadingComment] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getReviewById(id).then((currReview) => {
            setReview({...currReview})
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
            getCommentsByReviewId(id).then((currComments) => {
                setComments([...currComments])
                setIsLoadingComment(false)
            })
    },[isLoadingComment])
    


    if (isLoading) {
        return <p>Review Loading...</p>
    }

    if (isLoadingComment === true) {
        return (
            <>
            <RenderReviewInformation review={review}/>
            <p>Your comment is being added, please wait</p>
            </>
        )
    }
    
    if (comments === undefined) {
        return (
            <>
            <RenderReviewInformation review={review}/>
            <p>Comments are loading...</p>
            </>
        )
    }

    if (comments.length === 0) {
        return (
        <>
        <RenderReviewInformation review={review}/>
        <RenderNoComments setIsLoadingComment={setIsLoadingComment} />
        
        </>
        )
    }

    return (
        <>
        <RenderReviewInformation review={review}/>
        <RenderComments setIsLoadingComment={setIsLoadingComment} comments={comments}/>
        </>
    )
  }
  
  export default SingleReview
  