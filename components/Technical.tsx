"use client";

import { useState } from "react";

const groups = [
  {
    id: "languages",
    label: "Languages",
    title: "Languages",
    chips: ["Solidity", "TypeScript", "JavaScript", "Ruby", "Java"],
    detail: { primary: "Solidity ^0.8.x", since: "2021", notes: "production · audited" },
  },
  {
    id: "frameworks",
    label: "Frameworks & Tools",
    title: "Frameworks & tools",
    chips: ["Foundry", "Hardhat", "OpenZeppelin", "Remix", "Node.js", "React", "Next.js", "GraphQL"],
    detail: { primary: "Foundry + Next.js", since: "daily", notes: "tested · CI-first" },
  },
  {
    id: "protocols",
    label: "Protocols",
    title: "Protocols integrated",
    chips: ["Uniswap v3", "Chainlink", "LayerZero (OFT)", "Morpho", "ERC-4626 vaults", "ERC-20 / 721 / 1155"],
    detail: { primary: "Uniswap v3 fork (DagSwap)", since: "shipped", notes: "custom hooks · BlockDAG" },
  },
  {
    id: "ai",
    label: "AI / Agents",
    title: "AI · agents",
    chips: ["Claude", "ChatGPT", "Cursor", "LangChain", "Eliza"],
    detail: { primary: "Natural-language DeFi (Vibestation)", since: "live", notes: "EVM-MCP · Uniswap · LiFi" },
  },
  {
    id: "security",
    label: "Security & Analysis",
    title: "Security · analysis",
    chips: ["Tenderly", "Etherscan", "MetaMask", "Foundry invariants", "Slither"],
    detail: { primary: "Sweep lending protocol", since: "2 audits passed", notes: "junior/senior tranches · OFT" },
  },
];

export default function TechnicalSection() {
  const [active, setActive] = useState(groups[0].id);
  const current = groups.find((g) => g.id === active)!;

  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">02 — capabilities</div>
            <h2 className="section-title">The toolkit.</h2>
            <p className="section-sub">
              A curated stack — web, blockchain infrastructure, smart contracts, and modern
              AI workflows — sharpened on real production projects, not tutorials.
            </p>
          </div>
        </div>

        <div className="cap-wrap" data-hover>
          <div className="cap-tabs">
            {groups.map((g) => (
              <button
                key={g.id}
                className={`cap-tab${active === g.id ? " active" : ""}`}
                onClick={() => setActive(g.id)}
                data-hover
              >
                <span>{g.label}</span>
                <span className="count">{String(g.chips.length).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <div className="cap-panel">
            <div className="cap-panel-head">
              <span className="label">~/stack/{current.id}</span>
              <span className="title">{current.title}</span>
            </div>
            <div className="cap-chips">
              {current.chips.map((c) => (
                <span className="chip" key={c} data-hover>
                  <span className="dot" />
                  {c}
                </span>
              ))}
            </div>
            <div className="cap-detail">
              <div>
                <span className="key">primary:</span> <span className="val">{current.detail.primary}</span>
              </div>
              <div>
                <span className="key">since:&nbsp;&nbsp;</span> <span className="val">{current.detail.since}</span>
              </div>
              <div>
                <span className="key">notes:&nbsp;&nbsp;</span> <span className="val">{current.detail.notes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
