import { useRouter } from "next/router";
import Card from "../ui/Card";


function PostItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li >
      <Card>
        <div >
          <img src='' alt='' />
        </div>
        <div >
          <h3>{props.title}</h3>
          <p>{props.body}</p>
        </div>
        <div >
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default PostItem;