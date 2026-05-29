import Image from "next/image";

type ProjectCardProps = {
  title: string;
  kind: string;
  desc: string;
  link: string;
  img?: string;
  stack: string[];
};

export default function ProjectCard({ title, kind, desc, link, img, stack }: ProjectCardProps) {
  return (
    <a className="proj-card" href={link} target="_blank" rel="noopener" data-hover>
      <div className="media">
        <div className="stamp">{kind}</div>
        {img ? (
          <Image
            src={img}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="ph">project shot · {title.toLowerCase()}</div>
        )}
      </div>
      <div className="body">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="headline-chips" style={{ marginTop: 6 }}>
          {stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
        <div className="row">
          <span>{link.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
          <span>view ↗</span>
        </div>
      </div>
    </a>
  );
}
