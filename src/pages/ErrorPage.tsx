import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();
    return (
      <>
        <NavBar />
        <div className="p-5">
            <h1>Oops...</h1>
            <p>
              {isRouteErrorResponse(error)
                ? "Sorry, invalid page"
                : "Sorry, an unexpected error occurred "}
            </p>
        </div>
      </>
    );
}

export default ErrorPage
