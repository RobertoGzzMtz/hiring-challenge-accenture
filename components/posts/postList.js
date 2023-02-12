import PostItem from "./PostItem";
import classes from "./PostList.module.css";

function PostList(props) {
  return (
    <ul >
      {props.post.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </ul>
  );
}

export default PostList;