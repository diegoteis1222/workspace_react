import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

function Layout() {
  return (
    <main>
      <Menu></Menu>
      <Outlet />
      <div>footer</div>
    </main>
  );
}

export default Layout;
