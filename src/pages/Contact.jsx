import Banner from "../images/Banner.jpg";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  // Contact form fields
  const fields = [
    {
      type: "text",
      placeholder: "Votre nom",
    },
    {
      type: "email",
      placeholder: "Votre adresse email",
    },
    {
      type: "tel",
      placeholder: "Votre numéro de téléphone",
    },
    {
      type: "text",
      placeholder: "Sujet",
    },
  ];

  return (
    <>
      {/* Contact section */}
      <section
        className="min-vh-100 d-flex justify-content-center align-items-center py-5"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 105, 255, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Main container */}
        <div className="container bg-white rounded-4 p-5 mt-5">
          {/* Section title */}
          <SectionTitle
            title="ME CONTACTER"
            text="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
          />

          {/* Bootstrap grid */}
          <div className="row mt-5">
            {/* Contact form */}
            <div className="col-12 col-lg-6">
              <h2>Formulaire de contact</h2>

              <hr className="border-primary border-2 opacity-100" />

              {/* Dynamic inputs */}
              {fields.map((field, index) => (
                
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="form-control mt-3"
                />
              ))}

              {/* Message field */}
              <textarea
                placeholder="Votre message"
                className="form-control mt-3"
                rows="6"
              ></textarea>

              {/* Submit button */}
              <div className="text-center mt-3">
                <button className="btn btn-primary">Envoyer</button>
              </div>
            </div>

            {/* Contact informations */}
            <div className="col-12 col-lg-6">
              <h2>Mes coordonnées</h2>

              <hr className="border-primary border-2 opacity-100" />

              {/* Address */}
              <p>
                <i className="fas fa-map-marker-alt me-2"></i>
                40 Rue Laure Diebold, 69009 Lyon, France
              </p>

              {/* Phone */}
              <p>
                <i className="fas fa-mobile-alt me-2"></i>
                06 20 30 40 50
              </p>

              {/* Google Maps iframe */}
              <iframe
                title="Carte Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6303064135705!2d4.796526776291224!3d45.77859877108085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sbe!4v1778605878536!5m2!1sfr!2sbe"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
