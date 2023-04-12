import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {

  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 2000);
  }, []);

  return (
    <h1>Page Not Found!</h1>
  );
};

export default ErrorPage;