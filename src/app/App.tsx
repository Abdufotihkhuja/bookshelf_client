/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { withProviders } from "./providers";

const Pages = lazy(() => import("@/pages"));

const App = () => {
  return <Pages />;
};

export default withProviders(App);
