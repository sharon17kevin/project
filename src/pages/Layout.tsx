import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScrollToTop from "../hooks/useScrollToTop";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <ScrollToTop/>
    </>
  );
};

export default Layout;
