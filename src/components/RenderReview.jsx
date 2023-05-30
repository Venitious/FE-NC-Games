function RenderReview({review}) {


    if (review.category) {
        let lowerCaseGameCategory = review.category;
        let UpperCaseGameCategory = lowerCaseGameCategory.charAt(0).toUpperCase() + lowerCaseGameCategory.slice(1);
        
        return (
            <>
            <h3>{review.title}</h3>
            <img className="reviewImg"src={review.review_img_url} alt="Relevant picture of the game being reviewed"/>
            <ul>
                <li> {UpperCaseGameCategory} Game</li>
                <li>Upvotes: {review.votes}</li>
                <li>Comment count: {review.comment_count}</li>
            </ul>
            </>
            )
    }


  }
  
  export default RenderReview