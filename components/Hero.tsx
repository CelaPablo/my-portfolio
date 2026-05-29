const focus = [
  "Solidity",
  "Next.js",
  "Foundry",
  "Uniswap v3",
  "LayerZero",
  "AI · agents",
  "ERC-4626",
  "audit-prep",
];

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-status">
              <span className="dot" />
              available · Q3 2026
            </div>
            <h1 className="hero-title">
              Building{" "}
              <span className="underline-wave">production-grade</span> Web3 that{" "}
              <span className="accent">doesn&apos;t break</span> under real users.
            </h1>
            <p className="hero-lede">
              Full-stack + Web3 engineer. I ship the contracts, the interface, and the
              messy infrastructure in between — Solidity, Next.js, and Foundry, hardened
              on real production projects.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary" data-hover>
                view work <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn" data-hover>
                get in touch <span className="arrow">→</span>
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/CelaPablo"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                data-hover
              >
                gh
              </a>
              <a
                href="https://www.linkedin.com/in/pablo-cela-4a2219167/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                data-hover
              >
                in
              </a>
              <a
                href="https://twitter.com/pabloan95553659"
                target="_blank"
                rel="noopener"
                aria-label="X / Twitter"
                data-hover
              >
                x
              </a>
            </div>
          </div>

          <div className="terminal" data-hover>
            <div className="terminal-bar">
              <span className="dots">
                <span />
                <span />
                <span />
              </span>
              <span>~/celapablo/manifest.ts</span>
            </div>
            <div className="terminal-body">
              <span className="ln">
                <span className="com">{"// current focus"}</span>
              </span>
              <span className="ln">
                <span className="kw">const</span> <span className="var">developer</span> ={" "}
                <span className="pn">{"{"}</span>
              </span>
              <span className="ln !ml-6">
                <span className="ln">
                  {"  "}name: <span className="str">&quot;Cela Pablo&quot;</span>,
                </span>
                <span className="ln">
                  {"  "}role: <span className="str">&quot;Full-stack + Web3 engineer&quot;</span>,
                </span>
                <span className="ln">
                  {"  "}stack: [<span className="str">&quot;React&quot;</span>,{" "}
                  <span className="str">&quot;Next.js&quot;</span>,{" "}
                  <span className="str">&quot;Solidity&quot;</span>,{" "}
                  <span className="str">&quot;Foundry&quot;</span>],
                </span>
                <span className="ln">
                  {"  "}shipped: <span className="num">6</span>,
                  {"  "}<span className="com">{"// production protocols"}</span>
                </span>
                <span className="ln">
                  {"  "}audits: <span className="num">2</span>,
                  {"  "}<span className="com">{"// external, Sweep tranches"}</span>
                </span>
                <span className="ln">
                  {"  "}status: <span className="str">&quot;available&quot;</span>
                </span>
                <span className="ln">
                  {"  "}rate: <span className="kw">await</span>
                  {"  "}<span className="">negotiates</span><span className="kw">()</span>
                </span>
              </span>
              <span className="ln">
                <span className="pn">{"}"}</span>
              </span>
              <span className="ln">
                <span className="kw">$</span>
                {"  "}<span className="var">ready for next contract_</span>
              </span>
              <span className="ln">
                <span className="cursor-tick" />
              </span>
            </div>
            <div className="terminal-footer">
              <span>utf-8 · ts</span>
              <span>ln 12 · col 1</span>
            </div>
          </div>
        </div>

        <div className="hero-marquee">
          <div className="hero-marquee-track">
            {[...focus, ...focus].map((f, i) => (
              <span key={`${f}-${i}`}>{f}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
