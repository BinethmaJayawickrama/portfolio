import Container from "../components/Container";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="about" className="aboutHeroCenter">
      <Container className="aboutHeroCenterInner">
        {/* Profile image */}
        <div className="avatarWrap">
          <img className="avatarImg" src={profile} alt="Profile" />
        </div>

        {/* Text */}
        <p className="eyebrow">WEB DEVELOPER</p>

        <h1 className="h1 aboutTitle">
          Hi, I’m <span className="nameAccent">Binethma Jayawickrama</span>
        </h1>

        <p className="aboutSubtitle">
          I’m a passionate developer learning and building projects with React, JavaScript, and modern web tools.
        </p>

        {/* Social icons */}
        <div className="socialRow">
          <a className="socialBtn" href="https://github.com/BinethmaJayawickrama" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a className="socialBtn" href="https://www.linkedin.com/in/binethma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="socialBtn" href="binethmad@gmail.com" aria-label="Email">
            <MailIcon />
          </a>
        </div>

        {/* Buttons */}
        <div className="heroActions aboutCtas">
            <a className="btn btnPrimary" href="#projects">
                View Projects <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btnGhost" href="#contact">
                Contact me
            </a>
        </div>


      </Container>
    </section>
  );
}

/* Inline icons: no dependency needed */
function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.6 2 12.28c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48
        0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.2-1.11-1.52-1.11-1.52
        -.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.6 2.36 1.14 2.94.87
        .09-.67.35-1.14.63-1.4-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77
        -.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06.8-.23 1.66-.34 2.52-.34
        .86 0 1.72.12 2.52.34 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75
        .64.72 1.03 1.64 1.03 2.77 0 3.98-2.34 4.85-4.57 5.11.36.33.68.98.68 1.98
        0 1.43-.01 2.58-.01 2.93 0 .26.18.58.69.48A10.12 10.12 0 0 0 22 12.28
        C22 6.6 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.94 6.5A2.2 2.2 0 1 1 2.5 6.5a2.2 2.2 0 0 1 4.44 0ZM3 21V9h3.9v12H3Zm7.2-12h3.74v1.64h.05
        c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.7 2.66 4.7 6.12V21h-3.9v-5.24c0-1.25-.02-2.86-1.72-2.86
        -1.73 0-2 1.38-2 2.77V21H10.2V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
        fill="currentColor"
      />
    </svg>
  );
}
