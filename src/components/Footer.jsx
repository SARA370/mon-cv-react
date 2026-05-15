import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  /* =====================================================
     REUSABLE ICON COMPONENT
  ===================================================== */
  const Arrow = () => (
    <i className="fas fa-chevron-right text-primary me-2"></i>
  );

  /* =====================================================
     SCROLL TO TOP BUTTON STATE
  ===================================================== */
  const [showButton, setShowButton] = useState(false);

  /* =====================================================
     SHOW BUTTON AFTER SCROLL
  ===================================================== */
  const handleScroll = () => {
    setShowButton(window.scrollY > 200);
  };

  /* =====================================================
     SCROLL EVENT LISTENER
  ===================================================== */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     FOOTER NAVIGATION LINKS
  ===================================================== */
  const links = [
    {
      name: "Accueil",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Me contacter",
      path: "/contact",
    },
    {
      name: "Mentions légales",
      path: "/mentions-legales",
    },
  ];

  /* =====================================================
     PORTFOLIO PROJECTS
  ===================================================== */
  const projects = ["Fresh food", "Restaurant Akira", "Espace bien-être"];

  /* =====================================================
     BLOG ARTICLES
  ===================================================== */
  const articles = [
    "Coder son site en HTML/CSS",
    "Vendre ses produits sur le web",
    "Se positionner sur Google",
  ];

  /* =====================================================
     SCROLL TO TOP FUNCTION
  ===================================================== */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer style={{ backgroundColor: "#EEE", color: "#444" }}>
      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}
      <div className="container py-4">
        <div className="row">
          {/* =====================================================
              COLUMN 1 : CONTACT INFORMATIONS
          ===================================================== */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4>John Doe</h4>

            <ul className="list-unstyled mt-2">
              <li>40 Rue Laure Diebold</li>
              <li>69009 Lyon, France</li>
              <li>Téléphone : 06 20 30 40 50</li>
            </ul>

            {/* SOCIAL NETWORKS */}
            <div className="mt-3">
              <Link to="/github-user" aria-label="Profil GitHub">
                <i className="fab fa-github me-2 fs-3"></i>
              </Link>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil Twitter"
                className="text-dark"
              >
                <i className="fab fa-twitter me-2 fs-3"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn"
                className="text-dark"
              >
                <i className="fab fa-linkedin me-2 fs-3"></i>
              </a>{" "}
            </div>
          </div>

          {/* =====================================================
              COLUMN 2 : USEFUL LINKS
          ===================================================== */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4>Liens utiles</h4>

            <ul className="list-unstyled mt-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-decoration-none text-dark"
                  >
                    <Arrow /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              COLUMN 3 : LATEST PROJECTS
          ===================================================== */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4>Mes dernières réalisations</h4>

            <ul className="list-unstyled mt-2">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link
                    to="/portfolio"
                    className="text-decoration-none text-dark"
                  >
                    <Arrow /> {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              COLUMN 4 : LATEST ARTICLES
          ===================================================== */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4>Mes derniers articles</h4>

            <ul className="list-unstyled mt-2">
              {articles.map((article, index) => (
                <li key={index}>
                  <Link to="/blog" className="text-decoration-none text-dark">
                    <Arrow /> {article}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT SECTION
      ===================================================== */}
      <div
        className="text-center py-3"
        style={{
          backgroundColor: "#1e1e1e",
          color: "#fff",
        }}
      >
        <small>© Designed by John Doe</small>
      </div>

      {/* =====================================================
          SCROLL TO TOP BUTTON
      ===================================================== */}
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut de la page"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "#0d6efd",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-arrow-up fs-5"></i>
        </button>
      )}
    </footer>
  );
}

export default Footer;
