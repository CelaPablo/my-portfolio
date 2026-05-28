export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="dot" />
          <span>celapablo</span>
          <span style={{ color: "var(--fg-3)" }}>~/portfolio</span>
        </a>
        <div className="nav-links">
          <a href="#services">services</a>
          <a href="#stack">stack</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
        <a href="/resume.pdf" target="_blank" rel="noopener" className="nav-cta" data-hover>
          resume.pdf ↗
        </a>
      </div>
    </nav>
  );
}
