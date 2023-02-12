import classes from "../posts/post.module.css";

const PostDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src='' alt=''></img>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>{props.userId}</p>
    </section>
  );
};

export default PostDetail;