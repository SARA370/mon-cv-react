import article1 from "../images/blog1.jpg";
import article2 from "../images/blog2.jpg";
import article3 from "../images/blog3.jpg";
import article4 from "../images/blog4.jpg";
import article5 from "../images/blog5.jpg";
import article6 from "../images/blog6.jpg";
import SectionTitle from "../components/SectionTitle";
import SectionBanner from "../components/SectionBanner";
import Banner from "../images/Banner.jpg";

function Blog() {
  const articles = [
    {
      image: article1,
      title: "Coder son site en HTML/CSS",
      text: "Découvrez les bases essentielles pour créer un site web moderne avec HTML et CSS.",
      date: "Publié le 22 août 2022",
    },

    {
      image: article2,
      title: "Vendre ses produits sur le web",
      text: "Apprenez à développer votre activité grâce aux outils et stratégies du commerce en ligne.",
      date: "Publié le 20 août 2022",
    },

    {
      image: article3,
      title: "Se positionner sur Google",
      text: "Optimisez votre visibilité sur les moteurs de recherche grâce aux bonnes pratiques SEO.",
      date: "Publié le 1 août 2022",
    },

    {
      image: article4,
      title: "Coder en responsive design",
      text: "Créez des interfaces adaptées à tous les écrans avec les techniques du responsive design.",
      date: "Publié le 31 juillet 2022",
    },

    {
      image: article5,
      title: "Techniques de référencement",
      text: "Découvrez différentes méthodes pour améliorer le référencement naturel de votre site.",
      date: "Publié le 30 juillet 2022",
    },

    {
      image: article6,
      title: "Apprendre à coder",
      text: "Commencez votre apprentissage du développement web avec des conseils et ressources adaptés.",
      date: "Publié le 12 juillet 2022",
    },
  ];

  return (
    <>
      {/* Banner */}
      <SectionBanner image={Banner} />

      {/* Blog content */}
      <section className="my-5">
        <div className="container">
          {/* Title */}
          <SectionTitle
            title="BLOG"
            text="Retrouvez ici quelques articles sur le développement web."
          />
          {/* Blog cards */}
          <div className="row g-4 mt-4">
            {articles.map((article, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow rounded-4 border-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="card-img-top"
                  />

                  <div className="card-body">
                    <h3 className="card-title">{article.title}</h3>

                    <p>{article.text}</p>
                    <button
                      className="btn btn-primary"
                      aria-label={`Lire la suite de ${article.title}`}
                    >
                      Lire la suite
                    </button>
                  </div>
                  <div
                    className="card-footer"
                    style={{
                      backgroundColor: "var(--bg)",
                    }}
                  >
                    <time dateTime="2022-08-22">{article.date}</time>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
