import Link from "next/link";



function Navigation() {
  return (
    <header >
      <div >Accenture challenge create posts</div>
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