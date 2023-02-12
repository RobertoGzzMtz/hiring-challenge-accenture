import { useRef } from "react";
import Card from "../ui/Card";
import classes from "../posts/post.module.css";


function NewPostForm(props) {
  const titleInputRef = useRef();
  const bodyInputRef = useRef();
  const userIdInputRef = useRef();
 

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredBody = bodyInputRef.current.value;
    const enteredUserId = userIdInputRef.current.value;
   

    const postData = {
      title: enteredTitle,
      body: enteredBody,
      userId: enteredUserId,
      
    };

    props.onAddPost(postData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control} >
          <label htmlFor="title">Post Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control} >
          <label htmlFor="body">Post Body</label>
          <textarea type="text" required   rows="5"id="body" ref={bodyInputRef} />
        </div>
        <div className={classes.control} >
          <label htmlFor="userId">userId</label>
          <input type="text" required id="userId" ref={userIdInputRef} />
        </div>
        <div className={classes.actions}>
          <button>New Post</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPostForm;