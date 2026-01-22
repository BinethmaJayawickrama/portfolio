import Section from "../components/Section";

const items = [
  {
    role: "Frontend Developer (Personal Projects)",
    company: "Self",
    time: "2024 — Present",
    points: [
      "Built SPAs with reusable components and responsive layouts.",
      "Implemented modals, scroll-spy navigation, and theme toggles.",
      "Focused on clean UI design and maintainable structure.",
    ],
  },

  // ✅ moved from Projects -> Experience
  {
    role: "SiliconCore — Second-Hand Laptop Store",
    company: "Full-Stack Project (React + Node.js)",
    time: "2024",
    points: [
      "Developed a full-stack website for a second-hand laptop store.",
      "Implemented product catalog with detailed laptop specifications.",
      "Built search and filter functionality for easy product discovery.",
      "Added secure user authentication and MongoDB-backed storage.",
    ],
  },

  // ✅ moved from Projects -> Experience
  {
    role: "EndsWithUs — Online Flower Shop",
    company: "Full-Stack Project (React + Node.js)",
    time: "2024",
    points: [
      "Built a responsive e-commerce website for a flower shop.",
      "Created product listings and multiple bouquet/flower variations.",
      "Implemented shopping cart flow and secure payment integration.",
      "Developed backend with MongoDB for managing products and orders.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience">
      <div className="stack">
        {items.map((x) => (
          <div className="card" key={`${x.role}-${x.time}`}>
            <div className="expTop">
              <div>
                <h3 className="h3">{x.role}</h3>
                <p className="muted">{x.company}</p>
              </div>
              <span className="pill">{x.time}</span>
            </div>

            <ul className="list">
              {x.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
