import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Link href="/about">Go to about page</Link>
    </div>
  );
};

export default index;