import { useMemo, useState } from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  // Featured: prefer "Ongoing", else first project
  const featured = useMemo(() => {
    const ongoing = projects.find((p) =>
      String(p.year).toLowerCase().includes("ongoing")
    );
    return ongoing ?? projects[0];
  }, []);

  const rest = useMemo(
    () => projects.filter((p) => p.id !== featured?.id),
    [featured]
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      centerHeader
    >
      <div className="projectsWrap">
        {/* Featured project */}
        {featured ? (
          <div className="projectFeatured">
            <div className="projectFeaturedTop">
              <div>
                <p className="pill projectBadge">Featured</p>
                <h3 className="h2 projectFeaturedTitle" style={{ marginTop: 10 }}>
                  {featured.title}
                </h3>
                <p className="muted projectFeaturedDesc">{featured.description}</p>
              </div>

              <div className="projectFeaturedMeta">
                <span className="pill">{featured.year}</span>
                <button className="btn btnPrimary" onClick={() => setActive(featured)}>
                  View case study
                </button>
              </div>
            </div>

            <div className="chipRow">
              {featured.tags?.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

            <div className="cardActions">
              {featured.live ? (
                <a className="btn" href={featured.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              ) : null}
              {featured.code ? (
                <a className="btn btnGhost" href={featured.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Rest projects grid */}
        <div className="projectsGrid projectsGridAdvanced">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
