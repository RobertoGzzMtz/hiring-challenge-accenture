import Head from "next/head";
import { Fragment } from "react";
import PostList from "../components/posts/postList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Accenture challenge create posts</title>
        <meta
          name="description"
          content="Create Posts!"
        />
      </Head>
     <PostList posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
   await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json)).catch(err => console.error(err));;
  

  return {
    props: {
      posts: posts.map((post) => ({
        id: post._id.toString(),
        body: post.body,
        userId: post.userId,
             })),
    },
    revalidate: 1,
  };
}
  


export default HomePage;