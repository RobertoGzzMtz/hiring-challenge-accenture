import PostDetail from "../../components/posts/postDetail";
import { Fragment } from "react";
import Head from "next/dist/shared/lib/head";

const postDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.description} />
      </Head>
      <PostDetail
       
        title={props.postData.title}
        body={props.postData.body}
        userId={props.postData.userId}
      />
    </Fragment>
  );
};

// export const getStaticPaths = async () => {
  
//    await fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({ }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json)).catch(err => console.error(err));;


//   return {
//     fallback: "blocking",
//     paths: posts.map((post) => ({
//       params: { postId: post._id.toString() },
//     })),
//   };
// };

export const getStaticProps = async (context) => {
  const postId = context.params.postId;

 await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: data.title,
    body: data.body,
    userId: data.userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)).catch(err => console.error(err));;



  return {
    props: {
      postData: {
        id: selectedPost._id.toString(),
        title: selectedPost.title,
        body: selectedPost.body,
        userId: selectedPost.userId,
       
      },
    },
  };
};

export default postDetails;