export default function PageHead({ title, text }) {
  return (
    <section className="head">
      <div className="wrap">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
