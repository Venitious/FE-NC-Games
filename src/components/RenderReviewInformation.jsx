function RenderReviewInformation({review}) {

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
                <p> Votes: {review.votes}</p>
            </div>
        </section>
    )
  }
  
  export default RenderReviewInformation
  
  