import { useEffect } from "react";

import { Link } from "react-router";
import Button from "../../Components/Button";
const Page404 = () => {
  // dynamic title
  useEffect(() => {
    document.title = ` Error Page Not Found | Toy Bazaar`;
  });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-5 flex flex-col items-center justify-center">
        {/* <img className="max-w-[400px] w-full" src={error404} alt="" /> */}
        <h1 className="text-[200px]">404</h1>
        <h1 className="text-4xl text-center">Page Not Found</h1>
        <Link to="/" className="mt-5">
          <Button>Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
