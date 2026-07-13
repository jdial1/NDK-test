import { pressData } from '../data';

export default function PressComponent() {
  return (
    <section className="site-stage">
      <div className="list-page project-body">
        <h2 className="project-title">Selected Press</h2>
        {pressData.map((press) => (
          <a
            key={press.id}
            href={press.link}
            target="_blank"
            rel="noopener noreferrer"
            className="list-row"
          >
            <span className="list-title">{press.title}</span>
            <div className="list-meta">
              {press.source}, {press.date}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
