import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div>
            <p className="eyebrow">Case Study</p>
            <h3 className="h2" style={{ marginTop: 6 }}>{project.title}</h3>
          </div>
          <button className="iconBtn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <p className="muted">{project.longDescription}</p>

        <div className="modalGrid">
          <div className="card" style={{ padding: 14 }}>
            <p className="label">Role</p>
            <p>{project.role}</p>
          </div>
          <div className="card" style={{ padding: 14 }}>
            <p className="label">Stack</p>
            <p>{project.stack.join(", ")}</p>
          </div>
          <div className="card" style={{ padding: 14 }}>
            <p className="label">Highlights</p>
            <ul className="list">
              {project.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>

        <div className="cardActions" style={{ justifyContent: "flex-end", marginTop: 16 }}>
          {project.live ? (
            <a className="btn btnPrimary" href={project.live} target="_blank" rel="noreferrer">View Live</a>
          ) : null}
          {project.code ? (
            <a className="btn btnGhost" href={project.code} target="_blank" rel="noreferrer">Source Code</a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
