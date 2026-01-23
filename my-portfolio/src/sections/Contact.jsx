import Section from "../components/Section";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Contact() {
  // ✅ Update these with your real details
  const name = "Binethma Jayawickrama";
  const address = "Colombo, Sri Lanka";
  const phone = "+94 70 113 1651";
  const email = "binethmad@gmail.com";

  const github = "https://github.com/BinethmaJayawickrama";
  const linkedin = "https://www.linkedin.com/in/binethma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch with me."
      centerHeader
    >
      <div className="contactCenterWrap">
        <div className="card contactCard">
          <div className="contactInfo">
            <div className="contactRow">
              <span className="contactLabel">Name:</span>
              <span className="contactValue">{name}</span>
            </div>

            <div className="contactRow">
              <span className="contactLabel">Address:</span>
              <span className="contactValue">{address}</span>
            </div>

            <div className="contactRow">
              <span className="contactLabel">Phone:</span>
              <span className="contactValue">{phone}</span>
            </div>

            <div className="contactRow">
              <span className="contactLabel">Email:</span>
              <a className="contactValue contactLink" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>

          <div className="contactSocials">
            <a
              className="contactSocialBtn"
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              className="contactSocialBtn"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              className="contactSocialBtn"
              href={`mailto:${email}`}
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
