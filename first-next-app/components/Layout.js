import Hello from "../components/Hello";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Hello />
      {children}
    </div>
  );
};

export default Layout;