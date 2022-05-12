import ScrollToTop from "components/ScrollToTop";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import PUBLIC_ROUTES from "routes/publicRoutes";

const AppWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const UnAuthenticated = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppWrapper />
    </Router>
  );
};
export default UnAuthenticated;
