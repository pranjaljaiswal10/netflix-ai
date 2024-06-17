import { useRouteError } from "react-router-dom";

const Error = () => {
    const error=useRouteError()
    console.error(error)
  return (
   <>
   <h1>Oops!Something went wrong</h1>
   </>
  );
};

export default Error;
