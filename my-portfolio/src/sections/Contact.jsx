import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something">
      <div className="twoCol">
        <div className="card">
          <p className="muted">
            Add your email + socials. If you want a working form without a backend,
            use Formspree or EmailJS later.
          </p>

          <div className="contactBox">
            <div className="kv">
              <span className="muted">Email</span>
              <a href="mailto:youremail@example.com">youremail@example.com</a>
            </div>
            <div className="kv">
              <span className="muted">Location</span>
              <span>Your City</span>
            </div>
          </div>

          <div className="cardActions">
            <a className="btn btnPrimary" href="mailto:youremail@example.com">Email me</a>
            <a className="btn btnGhost" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="card">
          <p className="label">Availability</p>
          <ul className="list">
            <li>Open to internships / junior roles</li>
            <li>Can start: add your date</li>
            <li>Preferred: React + UI-focused work</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
