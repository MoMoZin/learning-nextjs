import Link from "next/link";
import Component from "../components/Component";
import Head from "next/head";

const index = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Home | Learn Next.js</title>
        <meta name="keywords" content="Next.js, javascript, react" />
      </Head>
      {
        data.map(todo => <h1 key={todo.id}>{todo.title}</h1>)
      }
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await req.json();
  return {
    props: { data }
  };
}