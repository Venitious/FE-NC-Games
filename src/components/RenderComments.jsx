function RenderComments({comment}) {

    const dateFormat= new Date(comment.created_at)

    let date = (dateFormat.getDate()+
           "/"+(dateFormat.getMonth()+1)+
           "/"+dateFormat.getFullYear()+
           " "+dateFormat.getHours()+
           ":"+dateFormat.getMinutes()+
           ":"+dateFormat.getSeconds());

    

    return (
  <>
  <p key={comment.comment_id}>{comment.author + ":"}</p>
  <p>{comment.body} </p>
  <p>{date}</p>
  <br></br>
  </>
    )
  }
  
  export default RenderComments