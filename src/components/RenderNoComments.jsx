import { useState } from "react"
import AddComment from "./AddComment"

function RenderNoComments({setIsLoadingComment}) {

    return (
        <>
        <section className="commentsClass">
            <h3 className="commentHeader">Comments </h3>
            <p>No comments have been posted on this thread</p>
            <AddComment setIsLoadingComment={setIsLoadingComment}/>
        </section>
        </>
    )
  }
  
  export default RenderNoComments