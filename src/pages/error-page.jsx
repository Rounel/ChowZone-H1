import { useRouteError } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <MainLayout>      
      <div id="error-page" className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
        <h1 className="text-[30px]">Oops!</h1>
        <p className="text-[30px]">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </MainLayout>
  );
}