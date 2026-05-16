import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Collapse from "bootstrap/js/dist/collapse";
function Header() {
  const navCollapseRef = useRef(null);

  const menuItems = [
    {
      label: "ACCUEIL",
      path: "/",
    },
    {
      label: "SERVICES",
      path: "/services",
    },
    {
      label: "RÉALISATIONS",
      path: "/portfolio",
    },
    {
      label: "BLOG",
      path: "/blog",
    },
    {
      label: "ME CONTACTER",
      path: "/contact",
    },
  ];
  const closeMenu = () => {
    if (navCollapseRef.current.classList.contains("show")) {
      const bsCollapse =
        Collapse.getInstance(navCollapseRef.current) ||
        new Collapse(navCollapseRef.current);

      bsCollapse.hide();
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link className="text-white text-decoration-none" to="/">
            JOHN DOE
          </Link>
        </div>
        {/* Bouton mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Ouvrir le menu de navigation"
          aria-expanded="false"
          aria-controls="navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navCollapseRef}
        >
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item, index) => (
              <li className="nav-item mx-2" key={index}>
                <Link
                  className="nav-link text-white nav-link-custom"
                  to={item.path}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
