import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "../posts/post.module.css";


function PostItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src='' alt='' />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.body}</p>
        </div>
        <div className={classes.actions} >
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default PostItem;