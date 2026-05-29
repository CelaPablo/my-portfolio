"use client";

import { useState } from "react";

const email = "pablooandress9@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const onCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">04 — contact</div>
            <h2 className="section-title">Let&apos;s build something.</h2>
            <p className="section-sub">
              I&apos;m open to Web3 freelance contracts, audit-prep engagements, and
              full-stack collaborations. Async by default, fast on async, fastest in
              Foundry.
            </p>
          </div>
          <div className="meta">
            <div>typezone UTC-3</div>
            <div>en · es</div>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Drop a line.</h3>
            <p>
              Tell me what you&apos;re building, the deadline pressure, and whether there&apos;s
              existing code or you&apos;re starting from a whiteboard. I&apos;ll come back with a
              scope and rate within a day.
            </p>
            <a className="email" href={`mailto:${email}`} onClick={onCopy} data-hover>
              <span>{email}</span>
              <span className="copy-state">{copied ? "✓ copied" : "click to copy"}</span>
            </a>
            <div style={{ display: "flex", gap: 10 }}>
              <a
                href={`mailto:${email}?subject=Project%20inquiry`}
                className="btn btn-primary"
                data-hover
              >
                send brief <span className="arrow">→</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener" className="btn" data-hover>
                download resume <span className="arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="contact-side">
            <div className="contact-side-head">
              <span>~/contact/channels</span>
              <span style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--lime)" }}>
                online
              </span>
            </div>
            <div className="contact-list">
              <a
                className="contact-row"
                href="https://www.linkedin.com/in/pablo-cela-4a2219167/"
                target="_blank"
                rel="noopener"
                data-hover
              >
                <span className="k">linkedin</span>
                <span className="v">pablo-cela</span>
                <span className="arrow">↗</span>
              </a>
              <a
                className="contact-row"
                href="https://github.com/CelaPablo"
                target="_blank"
                rel="noopener"
                data-hover
              >
                <span className="k">github</span>
                <span className="v">CelaPablo</span>
                <span className="arrow">↗</span>
              </a>
              <a className="contact-row" href={`mailto:${email}`} data-hover>
                <span className="k">email</span>
                <span className="v" style={{ fontSize: 12 }}>
                  {email}
                </span>
                <span className="arrow">↗</span>
              </a>
              <div className="contact-row" data-hover>
                <span className="k">timezone</span>
                <span className="v">UTC-3 (Argentina)</span>
                <span className="arrow">—</span>
              </div>
              <div className="contact-row" data-hover>
                <span className="k">availability</span>
                <span className="v" style={{ color: "var(--lime)" }}>
                  open
                </span>
                <span className="arrow">—</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
