import HeadlineCard from "./HeadlineCard";
import ProjectCard from "./ProjectCard";

const IMG = "https://celapablo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F";

export default function ProjectSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">03 — selected work</div>
            <h2 className="section-title">Six shipped products.</h2>
            <p className="section-sub">
              A mix of Web3 protocols, AI-DeFi UX, and lending infrastructure — all live,
              all production, all the kind of thing that breaks if you don&apos;t engineer it
              carefully.
            </p>
          </div>
          <div className="meta">
            <div>2 featured</div>
            <div>4 selected</div>
            <div>6 shipped total</div>
          </div>
        </div>

        <div className="projects-headline">
          <HeadlineCard
            num="01"
            stamp="// 2025 · launchpad"
            title="Stak"
            kind="Launchpad for DATs, SPACs & ICOs"
            desc="Designed a regulated launchpad for digital-asset treasuries, SPACs, and ICOs. Focused on the security-and-compliance edges — KYC flow, vesting math, subscription lifecycle — without making the UX feel like a bank portal."
            role="Lead engineer"
            year="2025"
            stack={["Next.js", "TypeScript", "Solidity", "Foundry", "GraphQL"]}
            img={`${IMG}stak.57f9f04f.jpg&w=1920&q=75`}
            link="https://app.stak.fund/"
          />
          <HeadlineCard
            num="02"
            stamp="// 2025 · AI · DeFi"
            title="Vibestation"
            kind="AI-powered DeFi interface"
            desc="An AI-powered DeFi UI that lets users 'vibe trade' across Uniswap and LiFi in plain English. Built the EVM-MCP integration so the LLM can read on-chain state and execute swaps without leaking signing keys."
            role="Full-stack + AI integration"
            year="2025"
            stack={["Next.js", "Claude", "EVM-MCP", "Uniswap", "LiFi"]}
            img={`${IMG}vibestation.0b69ad3f.jpg&w=1920&q=75`}
            link="https://aiscan.build/"
            reverse
          />
        </div>

        <div className="projects-grid">
          <ProjectCard
            title="DagSwap"
            kind="// uniswap v3 fork"
            desc="Uniswap v3 fork for BlockDAG chain with custom liquidity hooks and advanced trading features."
            stack={["Solidity", "Foundry", "BlockDAG"]}
            link="https://dag-swap.vercel.app/"
            img={`${IMG}dagswap.043d6c31.jpg&w=1200&q=75`}
          />
          <ProjectCard
            title="Taiser"
            kind="// funding protocol"
            desc="Funding protocol that turns VC deal tweets into bonding-curve raises with custom closing strategies."
            stack={["Solidity", "Next.js", "Bonding curves"]}
            link="https://www.taiser.ai/"
            img={`${IMG}taiser.a7dd0b4b.jpg&w=1200&q=75`}
          />
          <ProjectCard
            title="Sweep"
            kind="// lending protocol"
            desc="Junior/senior tranches with cross-chain OFT (LayerZero) integration. Shipped through 2 external audits."
            stack={["Solidity", "LayerZero", "Audited"]}
            link="https://www.sweepr.finance/"
            img={`${IMG}sweep.fd6d0e0d.jpg&w=1200&q=75`}
          />
          <ProjectCard
            title="Cienradios"
            kind="// streaming"
            desc="Spotify-like radio streaming app built in React on top of the Deezer API."
            stack={["React", "Deezer API"]}
            link="https://ar.cienradios.com/"
            img={`${IMG}cienradios.ef1adcc0.jpg&w=1200&q=75`}
          />
        </div>
      </div>
    </section>
  );
}
