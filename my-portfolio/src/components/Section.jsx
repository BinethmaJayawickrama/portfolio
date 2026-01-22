import Container from "./Container";

export default function Section({ id, eyebrow, title, children, centerHeader = false }) {
  return (
    <section id={id} className="section">
      <Container>
        <div className={`sectionHeader ${centerHeader ? "sectionHeaderCenter" : ""}`}>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="h2">{title}</h2> : null}
        </div>

        {children}
      </Container>
    </section>
  );
}
