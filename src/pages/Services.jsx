import SectionTitle from "../components/SectionTitle";
import SectionBanner from "../components/SectionBanner";
import Banner from "../images/Banner.jpg";


function Services() {
  const services = [
    {
      icon: "fas fa-desktop",
      title: "UX DESIGN",
      text: (
        <>
          L<strong>'UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
          Son but est d'offrir une expérience de navigation optimale à
          l'internaute.
        </>
      ),
    },

    {
      icon: "fas fa-code",
      title: "DÉVELOPPEMENT WEB",
      text: (
        <>
          Le <strong>développement de sites web</strong> repose sur
          l'utilisation des langages <u>HTML</u>, <u>CSS</u>, JavaScript et{" "}
          <u>PHP</u>.
        </>
      ),
    },

    {
      icon: "fas fa-search",
      title: "RÉFÉRENCEMENT SEO",
      text: (
        <>
          Le <strong>référencement naturel d'un site</strong>, aussi appelé{" "}
          <u>SEO</u>, consiste à mettre des techniques en œuvre pour{" "}
          <em>améliorer sa position</em> dans les résultats des moteurs de
          recherche.
        </>
      ),
    },
  ];
  return (
    <>
      <SectionBanner image={Banner} />

      {/* Services content */}
      <section className="my-5">
        <div className="container">
          {/* Title */}
          <SectionTitle
            title="MON OFFRE DE SERVICES"
            text="Voici les prestations sur lesquelles je peux intervenir."
          />

          {/* Services cards */}
          <div className="row g-4 mt-4">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="service-card card text-center border-0 h-100 p-4 rounded-4 shadow">
                  <div className="mb-3">
                    <i
                      className={`${service.icon} text-primary fs-1`}
                    ></i>
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
