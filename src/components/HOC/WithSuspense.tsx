/* eslint-disable react/display-name */
import { Suspense } from "react";
import Loader from "../Loader";

const WithSuspense =
  (Component, showLoader = false) =>
  (props) => {
    return (
      <Suspense fallback={showLoader ? <Loader /> : "..."}>
        <Component {...props} />
      </Suspense>
    );
  };
export default WithSuspense;
