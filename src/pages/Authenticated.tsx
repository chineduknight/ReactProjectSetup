import ScrollToTop from "components/ScrollToTop";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import PROTECTED_ROUTES from "routes/protectedRoutes";

const AppWrapper = () => {
  const routes = useRoutes(PROTECTED_ROUTES);
  return routes;
};

const Authenticated = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppWrapper />
    </Router>
  );
};
export default Authenticated;
