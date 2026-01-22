export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="card projectCard">
      <div className="projectTop">
        <h3 className="h3">{project.title}</h3>
        <span className="pill">{project.year}</span>
      </div>

      <p className="muted">{project.description}</p>

      <div className="chipRow">
        {project.tags.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="cardActions">
        <button
          className="btn"
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Open details for ${project.title}`}
        >
          Details
        </button>

        {project.live ? (
          <a className="btn btnGhost" href={project.live} target="_blank" rel="noreferrer">
            Live
          </a>
        ) : null}

        {project.code ? (
          <a className="btn btnGhost" href={project.code} target="_blank" rel="noreferrer">
            Code
          </a>
        ) : null}
      </div>
    </article>
  );
}
