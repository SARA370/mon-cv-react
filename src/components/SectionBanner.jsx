function PageBanner({ image }) {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "20vh",
      }}
    ></section>
  );
}

export default PageBanner;