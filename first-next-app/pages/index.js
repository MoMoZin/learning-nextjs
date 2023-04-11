import Link from "next/link";
import Component from "../components/Component";

const index = () => {
  return (
    <div>
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