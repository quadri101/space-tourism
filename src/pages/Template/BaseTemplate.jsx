import { Outlet } from "react-router-dom";
import Header from "../../layout/Header";
function Home() {
  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>

      {/* Header and navbar for all the pages */}
      <Header />

      {/* The page content goes here */}
      <Outlet />
    </>
  );
}

export default Home;
