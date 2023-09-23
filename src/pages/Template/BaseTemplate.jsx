import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layout/Header";
function Home() {
  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <Header />
      <Outlet />
    </>
  );
}

export default Home;
