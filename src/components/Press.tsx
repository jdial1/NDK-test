import { useSiteData } from '../context/SiteDataContext';
import TemplateField from './TemplateField';

export default function PressComponent() {
  const { data, mode } = useSiteData();

  return (
    <section className="site-stage">
      <div className="list-page project-body">
        <h2 className="project-title">Selected Press</h2>
        {data.pressData.map((press, i) => {
          if (mode === 'template') {
            return (
              <div key={press.id} className="list-row">
                <span className="list-title">
                  <TemplateField path={`pressData.${i}.title`} />
                </span>
                <div className="list-meta">
                  <TemplateField path={`pressData.${i}.source`} />,{' '}
                  <TemplateField path={`pressData.${i}.date`} />
                </div>
                <div className="list-meta">
                  <TemplateField path={`pressData.${i}.link`} />
                </div>
              </div>
            );
          }

          return (
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
          );
        })}
      </div>
    </section>
  );
}
