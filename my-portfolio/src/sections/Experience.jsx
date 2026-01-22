import Section from "../components/Section";

const items = [
  {
    role: "Frontend Developer (Personal Projects)",
    company: "Self",
    time: "2024 — Present",
    points: [
      "Built SPAs with reusable components and responsive layouts.",
      "Implemented modals, scroll-spy nav, and theme toggles.",
      "Focused on clean UI and maintainable structure.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve built things">
      <div className="stack">
        {items.map((x) => (
          <div className="card" key={x.role}>
            <div className="expTop">
              <div>
                <h3 className="h3">{x.role}</h3>
                <p className="muted">{x.company}</p>
              </div>
              <span className="pill">{x.time}</span>
            </div>
            <ul className="list">
              {x.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
