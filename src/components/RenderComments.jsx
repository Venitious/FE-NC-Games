import { useState } from "react";
import AddComment from "./AddComment";
import RenderEachComment from "./RenderEachComment";

function RenderComments({comments, setIsLoadingComment}) { 


  return (
    <section className="commentsClass">
    <h3 className="commentHeader">Comments </h3>
    <ul>
      {comments.map((comment) => {
        return <li key={comment.comment_id}><RenderEachComment comment={comment}/></li>
      })}
    </ul>
    <AddComment setIsLoadingComment={setIsLoadingComment} />
    </section>
  )
}
  
  export default RenderComments