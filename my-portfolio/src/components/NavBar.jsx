import Container from "./Container";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ activeId }) {
  return (
    <header className="navWrap">
      <Container className="nav navCenter">
        <nav className="navLinks" aria-label="Primary">
          {links.map((l) => (
            <button
              key={l.id}
              className={`navLink ${activeId === l.id ? "isActive" : ""}`}
              onClick={() => scrollToId(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </Container>
    </header>
  );
}
