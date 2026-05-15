import heroBg from "../images/JohnDoe-hero.jpg";
import aboutPhoto from "../images/JohnDoe-apropos.jpg";

function Home() {
  /* ==================================================
     SKILLS DATA
  ================================================== */

  const skills = [
    { title: "HTML5", pourcentage: "90%", color: "bg-danger" },
    { title: "CSS3", pourcentage: "80%", color: "bg-info" },
    { title: "JAVASCRIPT", pourcentage: "70%", color: "bg-warning" },
    { title: "PHP", pourcentage: "60%", color: "bg-success" },
    { title: "REACT", pourcentage: "50%", color: "bg-primary" },
  ];

  return (
    <>
      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section
        className="vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          /* Hero background image */
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          /* Dark overlay */
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0,0,0,0.3)",

          /* Text color */
          color: "white",
        }}
      >
        <h1 className="display-1 fw-bold mb-4">Bonjour, je suis John Doe</h1>

        <p className="display-6 fw-normal mb-4">Développeur web full stack</p>

        {/* Scroll button */}
        <a href="#about" className="btn btn-primary btn-lg px-4">
          En savoir plus
        </a>
      </section>

      {/* ==================================================
          ABOUT SECTION
      ================================================== */}

      <section className="my-5" id="about">
        {/* Main Bootstrap container */}
        <div className="container bg-white shadow rounded p-5">
          {/* Bootstrap grid */}
          <div className="row g-5">
            {/* Left column */}
            <div className="col-md-6">
              <h2>À propos</h2>

              {/* Blue separator */}
              <hr className="border-primary border-2 opacity-100 w-100" />

              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur-développeur web</strong>
                au CEF. Au cours de cette formation, j'ai pu acquérir des bases
                solides pour travailler dans le domaine du{" "}
                <strong>développement web</strong>.
              </p>

              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de{" "}
                <strong>développeur web full stack</strong>.
              </p>

              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques du web.
              </p>
            </div>

            {/* Right column */}
            <div className="col-md-6">
              {/* Profile image */}
              <img
                src={aboutPhoto}
                alt="John Doe"
                className="img-fluid rounded mb-3"
              />

              <h2>Mes compétences</h2>

              {/* ==================================================
                  DYNAMIC SKILLS RENDERING
              ================================================== */}

              {skills.map((skill, index) => (
                <div key={index}>
                  {/* Skill title */}
                  <p className="mt-3 mb-1">
                    {skill.title} {skill.pourcentage}
                  </p>

                  {/* Progress bar container */}
                  <div className="progress">
                    {/* Dynamic Bootstrap progress bar */}
                    <div
                      className={`progress-bar ${skill.color}`}
                      role="progressbar"
                      aria-valuenow={parseInt(skill.pourcentage)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: skill.pourcentage,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
