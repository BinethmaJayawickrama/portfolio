import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  // ✅ Update these
  const name = "Binethma Jayawickrama";
  const email = "binethmad@gmail.com";
  const githubUrl = "https://github.com/BinethmaJayawickrama";
  const linkedinUrl = "https://www.linkedin.com/in/binethma";

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="advFooter">
      <div className="container advFooterInner">
        {/* Left: Brand */}
        <div className="advFooterBrand">
          <div className="advFooterLogoRow">
            <span className="advFooterLogoDot" aria-hidden="true" />
            <span className="advFooterName">{name}</span>
          </div>

          <p className="advFooterTagline">
            Frontend + AI projects • Clean UI • Always learning
          </p>

          <div className="advFooterSocial">
            <a
              className="advFooterIcon"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              className="advFooterIcon"
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              className="advFooterIcon"
              href={`mailto:${email}`}
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a className="advFooterEmailBtn" href={`mailto:${email}`}>
              Email me
            </a>
          </div>
        </div>

        {/* Right: Quick Links */}
        <div className="advFooterCols">
          <div className="advFooterCol">
            <p className="advFooterHeading">Quick links</p>
            <ul className="advFooterList">
              {links.map((l) => (
                <li key={l.href}>
                  <a className="advFooterLink" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="advFooterCol">
            <p className="advFooterHeading">Contact</p>
            <ul className="advFooterList">
              <li>
                <a className="advFooterLink" href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
              <li>
                <span className="advFooterMuted">Sri Lanka</span>
              </li>
              <li>
                <span className="advFooterMuted">Open to internships / junior roles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="advFooterBottom">
        <div className="container advFooterBottomInner">
          <span className="advFooterBottomText">
            © {year} {name}. All rights reserved.
          </span>
          <span className="advFooterBottomText advFooterBottomRight">
            Built with React + Vite
          </span>
        </div>
      </div>
    </footer>
  );
}
