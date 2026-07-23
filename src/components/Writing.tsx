import { useSiteData } from '../context/SiteDataContext';
import TemplateField from './TemplateField';

export default function WritingComponent() {
  const { data, mode } = useSiteData();

  return (
    <section className="site-stage">
      <div className="list-page project-body">
        <h2 className="project-title">Selected Writing</h2>
        {data.writingsData.map((essay, i) => {
          const href = essay.link || essay.amazonLink || essay.bamLink;
          const linkPath = essay.link
            ? `writingsData.${i}.link`
            : essay.amazonLink
              ? `writingsData.${i}.amazonLink`
              : essay.bamLink
                ? `writingsData.${i}.bamLink`
                : null;

          if (mode === 'template') {
            return (
              <div key={essay.id} className="list-row">
                <span className="list-title">
                  <TemplateField path={`writingsData.${i}.title`} />
                </span>
                <div className="list-meta">
                  <TemplateField path={`writingsData.${i}.publication`} />,{' '}
                  <TemplateField path={`writingsData.${i}.date`} />
                </div>
                {linkPath && (
                  <div className="list-meta">
                    <TemplateField path={linkPath} />
                  </div>
                )}
              </div>
            );
          }

          return href ? (
            <a
              key={essay.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="list-row"
            >
              <span className="list-title">{essay.title}</span>
              <div className="list-meta">
                {essay.publication}, {essay.date}
              </div>
            </a>
          ) : (
            <div key={essay.id} className="list-row">
              <span className="list-title">{essay.title}</span>
              <div className="list-meta">
                {essay.publication}, {essay.date}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
