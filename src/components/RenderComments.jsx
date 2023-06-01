import RenderEachComment from "./RenderEachComment";

function RenderComments({comments, areCommentsLoading}) { 

  if (areCommentsLoading) {
    return <p>Loading comments...</p>
  }

  return (
    <section className="commentsClass">
    <h3 className="commentHeader">Comments </h3>
    <ul>
      {comments.map((comment) => {
        return <li key={comment.comment_id}><RenderEachComment comment={comment}/></li>
      })}
    </ul>
    </section>
  )
}
  
  export default RenderComments