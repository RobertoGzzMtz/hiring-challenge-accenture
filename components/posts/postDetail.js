

const PostDetail = (props) => {
  return (
    <section >
      <img src='' alt=''></img>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>{props.userId}</p>
    </section>
  );
};

export default PostDetail;