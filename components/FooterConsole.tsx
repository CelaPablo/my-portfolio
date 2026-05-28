"use client";

import { useState, useEffect } from "react";

function useScrollPct() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return pct;
}

export default function FooterConsole() {
  const pct = useScrollPct();
  const [time, setTime] = useState("");
  const [block, setBlock] = useState("");

  useEffect(() => {
    const upd = () => {
      const d = new Date();
      setTime(
        d.toTimeString().slice(0, 8) +
          " UTC" +
          (d.getTimezoneOffset() > 0 ? "-" : "+") +
          Math.abs(d.getTimezoneOffset() / 60)
      );
      setBlock((22400123 + (Math.floor(Date.now() / 12000) % 100)).toLocaleString());
    };
    upd();
    const t = setInterval(upd, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="console">
      <div className="seg">
        <span>
          uptime <b>online</b>
        </span>
        <span className="hide-sm">
          network <b>mainnet</b>
        </span>
        <span className="hide-sm">
          block <b>#{block}</b>
        </span>
      </div>
      <div className="seg">
        <span className="hide-sm">{time}</span>
        <span>
          scroll <b>{pct.toFixed(0).padStart(2, "0")}%</b>
        </span>
      </div>
    </div>
  );
}
