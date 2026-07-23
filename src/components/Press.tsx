import React from 'react';
import { useSiteData } from '../context/SiteDataContext';
import TemplateField from './TemplateField';

const COL_WIDTH = 410;
const COL_GAP = 80;
const COL_HEIGHT = 729;

export default function PressComponent() {
  const { data, mode, previewing, diffing } = useSiteData();
  const live = mode === 'live' || (mode === 'edit' && (previewing || diffing));
  const columnsRef = React.useRef<HTMLDivElement>(null);
  const [desktop, setDesktop] = React.useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches,
  );

  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  React.useEffect(() => {
    const el = columnsRef.current;
    if (!el) return;

    if (!desktop) {
      el.style.width = '';
      el.style.height = '';
      el.style.columnCount = '';
      return;
    }

    const layout = () => {
      el.style.width = `${COL_WIDTH}px`;
      el.style.height = 'auto';
      el.style.columnCount = '1';
      const contentHeight = el.scrollHeight;
      const cols = Math.max(1, Math.ceil(contentHeight / COL_HEIGHT));
      el.style.columnCount = String(cols);
      el.style.height = `${COL_HEIGHT}px`;
      el.style.width = `${cols * COL_WIDTH + (cols - 1) * COL_GAP}px`;
    };

    layout();
    window.addEventListener('resize', layout);
    return () => window.removeEventListener('resize', layout);
  }, [desktop, data.pressData]);

  return (
    <section className="site-stage press-page">
      <div className="press-stage">
        <div className="press-copy project-body">
          <h2 className="project-title press-title">Selected Press</h2>
          <div ref={columnsRef} className="press-columns">
            <p className="press-flow">
              {data.pressData.map((press, i) => {
                const title = (
                  <TemplateField path={`pressData.${i}.title`} />
                );
                const linkedTitle =
                  live && press.link ? (
                    <a
                      href={press.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press-title-link"
                    >
                      {title}
                    </a>
                  ) : (
                    <span className="press-title-link">{title}</span>
                  );

                return (
                  <React.Fragment key={press.id}>
                    <span className="press-entry">
                      {press.author ? (
                        <>
                          <TemplateField path={`pressData.${i}.author`} />
                          {'. '}
                        </>
                      ) : null}
                      {'"'}
                      {linkedTitle}
                      {'." '}
                      <TemplateField path={`pressData.${i}.source`} />
                      {', '}
                      <TemplateField path={`pressData.${i}.date`} />
                      {'.'}
                      {mode === 'template' && press.link ? (
                        <>
                          {' '}
                          <TemplateField path={`pressData.${i}.link`} />
                        </>
                      ) : null}
                    </span>
                    {i < data.pressData.length - 1 ? (
                      <span className="press-break" />
                    ) : null}
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
