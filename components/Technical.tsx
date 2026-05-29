"use client";

import { useEffect, useRef, useState } from "react";

const ROTATE_MS = 4000;

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const current = groups[activeIndex];

  // Respect reduced-motion: don't auto-rotate.
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Only rotate while the section is on screen.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const rotating = visible && !paused && !reducedMotion;

  useEffect(() => {
    if (!rotating) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % groups.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [rotating, activeIndex]);

  const selectTab = (index: number) => {
    setActiveIndex(index);
  };

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

        <div
          className="cap-wrap"
          data-hover
          ref={wrapRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="cap-tabs">
            {groups.map((g, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={g.id}
                  className={`cap-tab${isActive ? " active" : ""}`}
                  onClick={() => selectTab(i)}
                  data-hover
                >
                  <span>{g.label}</span>
                  <span className="count">{String(g.chips.length).padStart(2, "0")}</span>
                  {isActive && rotating && (
                    <span
                      className="cap-tab-progress"
                      key={activeIndex}
                      style={{ animationDuration: `${ROTATE_MS}ms` }}
                    />
                  )}
                </button>
              );
            })}
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
