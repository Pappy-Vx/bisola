export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="fbrand">
          Bisola<span className="dot">✦</span>
        </div>
        <div className="flinks">
          <a href="#results">Results</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="fmeta">
          © 2026 Alli Bisola Aminat.
          <br />
          SEO Analyst · Product Marketing Manager
          <br />
          Built with ❤️ + ☕ by{" "}
          <a
            href="https://kolapo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="fkola"
          >
            Kola
          </a>
        </div>
      </div>
    </footer>
  );
}
