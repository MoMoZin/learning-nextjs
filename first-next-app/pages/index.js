import Link from "next/link";
import Component from "../components/Component";

const index = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Link href="/about">Go to about page</Link>
      <Component />
    </div>
  );
};

export default index;