import Link from "next/link";
import Component from "../components/Component";

const index = () => {
  return (
    <div>
      <Link href="/about">Go to about page</Link>
      <Component />
    </div>
  );
};

export default index;