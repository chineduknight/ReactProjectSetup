import Authenticated from "./Authenticated";
import UnAuthenticated from "./UnAuthenticated";

const Pages = () => {
  const isAuthUser = false;
  if (isAuthUser) {
    return <Authenticated />;
  }

  return <UnAuthenticated />;
};

export default Pages;
