export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 13,
                color: "var(--fg-1)",
                marginBottom: 6,
              }}
            >
              celapablo
            </div>
            <div>© 2026 · Pablo Cela · built with React, Next.js & too much Foundry.</div>
          </div>
          <div className="footer-ascii">
            {`  ┌─────────────┐
  │  ◆◆◆◆◆◆◆◆◆  │
  │  ◆ EOF ◆◆◆  │
  │  ◆◆◆◆◆◆◆◆◆  │
  └─────────────┘`}
          </div>
          <div style={{ textAlign: "right" }}>
            <div>built 2026.05 · v3.0</div>
            <div>
              <a href="#top" data-hover style={{ color: "var(--cyan)" }}>
                ↑ back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
