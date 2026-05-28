const ICON = "/icons/tech";

const services = [
  {
    title: "Frontend Applications",
    desc: "Fast, production-ready web apps in modern React & Next.js — dashboards, Web3 interfaces, and complex UI flows tuned for performance and scale.",
    icons: ["react.svg", "nextjs.svg", "nodejs.svg"],
  },
  {
    title: "Core Engineering",
    desc: "Clean, maintainable application logic in JavaScript & TypeScript, built for scalability, long-term reliability, and real-world production use.",
    icons: ["javascript.svg", "typescript.svg"],
  },
  {
    title: "UI Systems & Styling",
    desc: "Responsive, polished interfaces and design systems focused on usability, consistency, and a modern product aesthetic.",
    icons: ["tailwind-css.svg"],
  },
  {
    title: "Smart Contracts & Review",
    desc: "Design, implement, and review Solidity contracts — fixing critical issues and preparing codebases for audit with safer architecture and testing.",
    icons: ["solidity.svg"],
  },
  {
    title: "Foundry Project Setup",
    desc: "Turn messy contract repos into clean, testable Foundry projects with structured tests, deployment scripts, and reproducible workflows.",
    icons: ["foundry.png"],
  },
  {
    title: "Backend & Web3 Infra",
    desc: "Indexers, automation bots, event listeners, and execution scripts that bridge on-chain activity with backend systems.",
    icons: ["web3.png"],
  },
  {
    title: "Protocol Integration",
    desc: "Integrate on-chain protocols like Chainlink, Uniswap, Morpho, and vault systems — translating contract mechanics into reliable workflows.",
    icons: ["ethereum.svg", "uniswap.svg", "chainlink.svg"],
  },
];

export default function ServiceSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">01 — services</div>
            <h2 className="section-title">How I can help.</h2>
            <p className="section-sub">
              Practical development solutions designed to turn ideas into reliable,
              production-ready products — from the frontend down to the contract layer.
            </p>
          </div>
          <div className="meta">
            <div>{services.length} services</div>
            <div>web · web3</div>
            <div>freelance · contract</div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article className="service" key={s.title} data-hover>
              <div className="service-num">_{String(i + 1).padStart(2, "0")}</div>
              <div className="service-icons">
                {s.icons.map((icon) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={icon} src={`${ICON}/${icon}`} alt="" aria-hidden="true" />
                ))}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-body">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
