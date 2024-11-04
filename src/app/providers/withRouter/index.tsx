// import store from "@/store";
import React, { Suspense } from "react";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    // <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={""}>{component()}</Suspense>
      </BrowserRouter>
    // </Provider>
  );
