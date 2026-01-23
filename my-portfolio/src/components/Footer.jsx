export default function Footer() {
  const year = new Date().getFullYear();
  const name = "Binethma Jayawickrama"; // change to your name

  return (
    <footer className="simpleFooter">
      <div className="container">
        <div className="simpleFooterBox">
          © {year} <strong>{name}</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
