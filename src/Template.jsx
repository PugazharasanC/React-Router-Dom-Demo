import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default Template;
