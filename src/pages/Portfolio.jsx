import card1 from "../images/Card-1.jpg";
import card2 from "../images/Card-2.jpg";
import card3 from "../images/Card-3.jpg";
import SectionTitle from "../components/SectionTitle";
import SectionBanner from "../components/SectionBanner";
import Banner from "../images/Banner.jpg";

function Portfolio() {
  // Tableau contenant les projets du portfolio
  const projects = [
    {
      image: card1,
      alt: "Projet Fresh Food",
      title: "Fresh food",
      text: "Réalisation d'un site avec commande en ligne.",
      footer: "Site réalisé avec PHP et MySQL",
    },

    {
      image: card2,
      alt: "Projet Restaurant Akira",
      title: "Restaurant Akira",
      text: "Réalisation d'un site vitrine.",
      footer: "Site réalisé avec WordPress",
    },

    {
      image: card3,
      alt: "Projet Espace bien-être",
      title: "Espace bien-être",
      text: "Réalisation d'un site vitrine pour un praticien de bien-être.",
      footer: "Site réalisé avec HTML/CSS",
    },
  ];

  return (
    <>
      {/* Banner de la page */}
      <SectionBanner image={Banner} />

      {/* Section portfolio */}
      <section className="py-5">
        <div className="container">
          {/* Titre */}
          <SectionTitle
            title="PORTFOLIO"
            text="Voici quelques-unes de mes réalisations."
          />
          {/* Row Bootstrap contenant les cards */}
          <div className="row g-4 mt-2">
            {/* Génération automatique des cards */}
            {projects.map((projet, index) => (
              // Responsive Bootstrap
              <div key={index} className="col-12 col-md-6 col-lg-4">
                {/* Card Bootstrap */}
                <div className="card h-100">
                  {/* Image du projet */}
                  <img
                    src={projet.image}
                    alt={projet.alt}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Contenu de la card */}
                  <div className="card-body text-center d-flex flex-column align-items-center">
                    <h3 className="card-title">{projet.title}</h3>

                    <p className="card-text">{projet.text}</p>

                    {/* Bouton */}
                    <button className="btn btn-outline-primary mt-auto px-4">
                      Voir
                    </button>
                  </div>

                  {/* Footer de la card */}
                  <div className="card-footer text-center">{projet.footer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
