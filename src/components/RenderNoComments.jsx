function RenderNoComments({areCommentsLoading}) {

    if (areCommentsLoading) {
        <p>Comments loading...</p>
    }

    return (
        <>
        <section className="commentsClass">
            <h3 className="commentHeader">Comments </h3>
            <p>No comments have been posted on this thread</p>
        </section>
        </>
    )
  }
  
  export default RenderNoComments