import NewPostForm from "../../components/posts/newPostForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/dist/shared/lib/head";

const NewPostPage = () => {
  const router = useRouter();

  const addPostHandler = async (enteredPostData) => {
    const response = await fetch("/api/new-post", {
      method: "POST",
      body: JSON.stringify(enteredPostData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add new Post </title>
        <meta name="description" content="Add your own new React Posts!" />
      </Head>
      <NewPostForm onAddPost={addPostHandler} />
    </Fragment>
  );
};

export default NewPostPage;