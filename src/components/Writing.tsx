import { writingsData } from '../data';

export default function WritingComponent() {
  return (
    <section className="site-stage">
      <div className="list-page project-body">
        <h2 className="project-title">Selected Writing</h2>
        {writingsData.map((essay) => {
          const href = essay.link || essay.amazonLink || essay.bamLink;
          const body = (
            <>
              <span className="list-title">{essay.title}</span>
              <div className="list-meta">
                {essay.publication}, {essay.date}
              </div>
            </>
          );

          return href ? (
            <a
              key={essay.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="list-row"
            >
              {body}
            </a>
          ) : (
            <div key={essay.id} className="list-row">
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
