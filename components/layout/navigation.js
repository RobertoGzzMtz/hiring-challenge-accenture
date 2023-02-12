import Link from "next/link";
import classes from "../layout/Layout.module.css";


function Navigation() {
  return (
    <header className={classes.header} >
      <div className={classes.logo}>Accenture challenge create posts</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Posts</Link>
          </li>
          <li>
            <Link href="/new-post">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;