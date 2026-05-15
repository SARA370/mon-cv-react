import SectionTitle from "../components/SectionTitle";

function MentionsLegales() {
  const accordionItems = [
    {
      title: "Éditeur du site",
      collapseId: "collapseEditor",
      defaultOpen: true,
      content: (
        <>
          <h3>John Doe</h3>
          <p>
            <i className="fas fa-map-marker-alt me-2"></i>
            40 Rue Laure Diebold
            <br />
            69009 Lyon, France
          </p>
          <p>
            <i className="fas fa-mobile-alt me-2"></i>
            <a href="tel:0620304050">06 20 30 40 50</a>
          </p>
          <p>
            <i className="fas fa-envelope me-2"></i>
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
          </p>
        </>
      ),
    },
    {
      title: "Hébergeur",
      collapseId: "collapseHost",
      content: (
        <>
          <h3>Always Data</h3>
          <p>
            91 rue du Faubourg Saint Honoré
            <br />
            75008 Paris
          </p>
          <p>
            <i className="fas fa-globe me-2"></i>
            <a
              href="https://www.alwaysdata.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.alwaysdata.com
            </a>
          </p>
        </>
      ),
    },
    {
      title: "Crédits",
      collapseId: "collapseCredits",
      content: (
        <>
          <h3>Crédits</h3>
          <p>Site développé par John Doe, étudiant du CEF.</p>
          <p>
            Les images libres de droit sont issues du site{" "}
            <a
              href="https://pixabay.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
            .
          </p>
        </>
      ),
    },
  ];

  return (
    /* Container principal centré verticalement et horizontalement */
    <section className="my-5 py-5 d-flex align-items-center justify-content-center">
      <div className="container">
        {/* TITRE DE LA PAGE */}
        <SectionTitle
          title="MENTIONS LÉGALES"
          text="Informations légales concernant le site."
        />

        {/* ACCORDÉON BOOTSTRAP */}
        <div className="accordion mt-4" id="legalAccordion">
          {accordionItems.map((item, index) => (
            <div key={index} className="accordion-item">
              {/* Bouton qui ouvre/ferme l'item */}
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  aria-expanded={item.defaultOpen ? "true" : "false"}
                  aria-controls={item.collapseId}
                  data-bs-target={`#${item.collapseId}`}
                >
                  {item.title}
                </button>
              </h2>

              {/* Contenu de l'item */}
              <div
                id={item.collapseId}
                className={`accordion-collapse collapse ${
                  item.defaultOpen ? "show" : ""
                }`}
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;
