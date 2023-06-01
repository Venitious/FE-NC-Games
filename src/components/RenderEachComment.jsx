import { formatDate } from "../utils";

function RenderEachComment({comment}) { 

      
      return (
      <>
      <p key={comment.comment_id}>{comment.author + ":"}</p>
      <p>{comment.body} </p>
      <p>{formatDate(comment.created_at)}</p>
      <br></br>
      </>
      )
    }
    
    export default RenderEachComment