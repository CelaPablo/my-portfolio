import Image from "next/image";

type HeadlineCardProps = {
  num: string;
  title: string;
  kind: string;
  desc: string;
  role: string;
  stack: string[];
  year: string;
  img?: string;
  stamp: string;
  link: string;
  reverse?: boolean;
};

export default function HeadlineCard({
  num,
  title,
  kind,
  desc,
  role,
  stack,
  year,
  img,
  stamp,
  link,
  reverse,
}: HeadlineCardProps) {
  return (
    <article className="headline-card" data-hover>
      <div
        className="headline-media"
        style={
          reverse
            ? { order: 2, borderRight: "none", borderLeft: "1px solid var(--line-soft)" }
            : undefined
        }
      >
        <div className="img-stamp">{stamp}</div>
        <div className="img-shell">
          {img ? (
            <Image
              src={img}
              alt={`${title} project screenshot`}
              fill
              sizes="(max-width: 880px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="ph">project shot · {title.toLowerCase()}</div>
          )}
        </div>
      </div>
      <div className="headline-body">
        <div className="headline-num">_{num} · featured</div>
        <h3 className="headline-title">{title}</h3>
        <div className="headline-kind">{kind}</div>
        <p className="headline-desc">{desc}</p>
        <dl className="headline-meta">
          <div>
            <dt>role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>year</dt>
            <dd>{year}</dd>
          </div>
          <div>
            <dt>status</dt>
            <dd style={{ color: "var(--lime)" }}>● live</dd>
          </div>
        </dl>
        <div>
          <dt
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--fg-3)",
              marginBottom: 8,
              marginTop: 8,
            }}
          >
            stack
          </dt>
          <div className="headline-chips">
            {stack.map((s) => (
              <span className="chip" key={s} data-hover>
                <span className="dot" />
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="headline-cta">
          <a href={link} target="_blank" rel="noopener" className="btn btn-primary" data-hover>
            view live <span className="arrow">↗</span>
          </a>
          <a href={link} target="_blank" rel="noopener" className="btn" data-hover>
            case study <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
