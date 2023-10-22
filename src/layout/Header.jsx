import { useState } from "react";
import Navbar from "../components/Navbar";
function Header() {
  const [hideNavbar, setHideNavbar] = useState(true);

  function toggleNavbar() {
    setHideNavbar(!hideNavbar);
  }

  return (
    <header className="primary-header flex">
      <div>
        <img
          alt="the company logo"
          className="logo"
          src="/assets/shared/logo.svg"
        />
      </div>
      <button
        onClick={toggleNavbar}
        aria-controls="primary-navigation"
        className={`mobile-nav-toggle `}
        aria-expanded={hideNavbar ? "false" : "true"}
      >
        <span className="sr-only">Menu</span>
      </button>
      <Navbar hideNavbar={hideNavbar} />
    </header>
  );
}

export default Header;
