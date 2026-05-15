function SectionTitle({ title, text }) {
  return (
    <div className="text-center">

      <h1>{title}</h1>

      <p>{text}</p>

      <hr className="border-primary border-3 opacity-100 w-25 mx-auto" />

    </div>
  );
}

export default SectionTitle;