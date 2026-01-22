import Container from "./Container";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footerInner">
        <p className="muted">© {new Date().getFullYear()} YourName. Built with React.</p>
        <div className="footerLinks">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#home">Back to top</a>
        </div>
      </Container>
    </footer>
  );
}
