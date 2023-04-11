import Link from "next/link";
import Component from "../components/Component";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Home | Learn Next.js</title>
        <meta name="keywords" content="Next.js, javascript, react" />
      </Head>
      <Link href="/about">
        <span className="about">Go to about page</span>
      </Link>
      <Component />
      <style jsx>
        {
          `
          .about{
            color:brown;
          }
          `
        }
      </style>
    </div>
  );
};

export default index;