function RenderReview({review}) {


    if (review.category) {
        let lowerCaseGameCategory = review.category;
        let UpperCaseGameCategory = lowerCaseGameCategory.charAt(0).toUpperCase() + lowerCaseGameCategory.slice(1);
        
        return (
            <>
            <h3>{review.title}</h3>
            <img src={review.review_img_url}/>
            <p> {UpperCaseGameCategory} Game</p>
            <p>Upvotes: {review.votes}</p>
            <p>Comment count: {review.comment_count}</p>
            </>
            )
    }


  }
  
  export default RenderReview