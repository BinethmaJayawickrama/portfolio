import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="twoCol">
        <div className="card">
          <p className="muted">
            Write your story here: what you’re aiming for, the kind of products you like building,
            and what makes you different.
          </p>
          <p className="muted" style={{ marginTop: 10 }}>
            Keep this focused: 4–6 lines maximum. Recruiters skim.
          </p>
        </div>

        <div className="card">
          <p className="label">Highlights</p>
          <ul className="list">
            <li>Responsive UI with clean component structure</li>
            <li>Reusable systems (cards, sections, typography)</li>
            <li>Accessibility + performance mindset</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
