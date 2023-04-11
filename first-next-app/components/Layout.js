import Hello from "../components/Hello";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Image src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg" width={500} height={350} />
      <Hello />
      {children}
    </div>
  );
};

export default Layout;