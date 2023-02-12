
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

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

    console.log(result);

  

    res.status(201).json({ message: "Post created!" });
  }
};

export default handler;