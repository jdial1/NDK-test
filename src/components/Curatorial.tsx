import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Exhibition, PastHarwoodExhibition } from '../types';
import { useSiteData } from '../context/SiteDataContext';
import TemplateField from './TemplateField';

type Selected = (Exhibition | PastHarwoodExhibition) & { pathBase: string };

export default function Curatorial() {
  const { data, mode } = useSiteData();
  const editing = mode === 'edit';
  const [selected, setSelected] = React.useState<Selected | null>(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const railRef = React.useRef<HTMLDivElement>(null);

  const thumbs = [
    ...data.exhibitionsData.map((ex, i) => ({
      id: ex.id,
      titlePath: `exhibitionsData.${i}.title`,
      datePath: `exhibitionsData.${i}.date`,
      themePath: `exhibitionsData.${i}.category`,
      blurbPath: `exhibitionsData.${i}.description`,
      imagePath: `exhibitionsData.${i}.image`,
      pathBase: `exhibitionsData.${i}`,
      item: { ...ex, pathBase: `exhibitionsData.${i}` } as Selected,
    })),
    ...data.pastExhibitionsData
      .map((ex, i) => ({ ex, i }))
      .filter(({ ex }) => ex.image)
      .map(({ ex, i }) => ({
        id: ex.id,
        titlePath: `pastExhibitionsData.${i}.title`,
        datePath: `pastExhibitionsData.${i}.date`,
        themePath: '',
        blurbPath: `pastExhibitionsData.${i}.description`,
        imagePath: `pastExhibitionsData.${i}.image`,
        pathBase: `pastExhibitionsData.${i}`,
        item: { ...ex, pathBase: `pastExhibitionsData.${i}` } as Selected,
        themeLabel: 'Harwood',
      })),
  ];

  const updateScrollState = React.useEffectEvent(() => {
    const el = railRef.current;
    if (!el) return;

    const maxScroll = Math.max(el.scrollWidth - el.clientWidth, 0);
    const atStart = el.scrollLeft <= 4;
    const atEnd = el.scrollLeft >= maxScroll - 4;

    setCanPrev(!atStart);
    setCanNext(!atEnd);

    const items = [...el.querySelectorAll<HTMLElement>('.thumb-item')];
    if (!items.length) return;

    if (atStart) {
      setActiveIndex(0);
      return;
    }

    if (atEnd) {
      setActiveIndex(items.length - 1);
      return;
    }

    let index = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.offsetLeft + item.offsetWidth * 0.4 > el.scrollLeft) {
        index = i;
        break;
      }
    }
    setActiveIndex(index);
  });

  React.useEffect(() => {
    const el = railRef.current;
    if (!el || selected) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [selected, thumbs.length]);

  const scrollByPage = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.72, 280), behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const el = railRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('.thumb-item');
    const target = items[index];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
  };

  return (
    <section className="site-stage exhibitions-stage">
      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="thumbs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="thumb-rail"
          >
            <div ref={railRef} className="thumb-stage">
              {thumbs.map((thumb) => (
                <button
                  key={thumb.id}
                  type="button"
                  className="thumb-item"
                  onClick={() => setSelected(thumb.item)}
                  aria-label={thumb.id}
                >
                  <span className="thumb-item-image">
                    <TemplateField path={thumb.imagePath} as="img" alt="" />
                  </span>
                  <span className="thumb-caption">
                    <span className="thumb-theme">
                      {thumb.themePath ? (
                        <TemplateField path={thumb.themePath} />
                      ) : (
                        'themeLabel' in thumb ? thumb.themeLabel : 'Harwood'
                      )}
                    </span>
                    <span className="thumb-title">
                      <TemplateField path={thumb.titlePath} />
                    </span>
                    <span className="thumb-date">
                      <TemplateField path={thumb.datePath} />
                    </span>
                    <span className="thumb-blurb">
                      <TemplateField path={thumb.blurbPath} />
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div className="thumb-nav">
              <button
                type="button"
                className="thumb-nav-prev"
                onClick={() => scrollByPage(-1)}
                disabled={!canPrev}
                aria-label="Previous exhibitions"
              >
                <span className="thumb-nav-label-full">← Prev</span>
                <span className="thumb-nav-label-short">←</span>
              </button>
              <span className="thumb-nav-count">
                {activeIndex + 1} / {thumbs.length}
              </span>
              <button
                type="button"
                className="thumb-nav-next"
                onClick={() => scrollByPage(1)}
                disabled={!canNext}
                aria-label="Next exhibitions"
              >
                <span className="thumb-nav-label-full">Next →</span>
                <span className="thumb-nav-label-short">→</span>
              </button>
              <button
                type="button"
                className="thumb-nav-start"
                onClick={() => scrollToIndex(0)}
                disabled={!canPrev}
                aria-label="Jump to start"
              >
                Start
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="detail-stage"
          >
            <div className="detail-copy project-body">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="nav-link mb-5 !border-0 hover:!border-b"
              >
                ← Selected Exhibitions
              </button>
              <h2 className="project-title">
                <TemplateField path={`${selected.pathBase}.title`} />
              </h2>
              <p className="mb-[21px]">
                <TemplateField path={`${selected.pathBase}.date`} />
                {'location' in selected && selected.location ? (
                  <>
                    {' · '}
                    <TemplateField path={`${selected.pathBase}.location`} />
                  </>
                ) : null}
              </p>
              <p className="mb-[21px]">
                <TemplateField path={`${selected.pathBase}.description`} />
              </p>
              {'details' in selected &&
                selected.details?.map((_, idx) => (
                  <p key={idx} className="mb-[14px] text-[#666]">
                    <TemplateField path={`${selected.pathBase}.details.${idx}`} />
                  </p>
                ))}
              {'curatorialDetails' in selected &&
                selected.curatorialDetails?.map((_, idx) => (
                  <p key={idx} className="mb-[14px] text-[#666]">
                    <TemplateField path={`${selected.pathBase}.curatorialDetails.${idx}`} />
                  </p>
                ))}
              <p className="mt-[21px]">
                {selected.link && (
                  mode === 'template' ? (
                    <TemplateField path={`${selected.pathBase}.link`} />
                  ) : (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={editing ? (e) => {
                        e.preventDefault();
                      } : undefined}
                    >
                      <TemplateField path={`${selected.pathBase}.link`} display="Exhibition page" />
                    </a>
                  )
                )}
                {'reviewUrl' in selected && selected.reviewUrl && (
                  <>
                    {selected.link ? ' · ' : ''}
                    {mode === 'template' ? (
                      <>
                        <TemplateField path={`${selected.pathBase}.reviewUrl`} />
                        {' · '}
                        <TemplateField path={`${selected.pathBase}.reviewLabel`} />
                      </>
                    ) : (
                      <a
                        href={selected.reviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={editing ? (e) => e.preventDefault() : undefined}
                      >
                        <TemplateField
                          path={`${selected.pathBase}.reviewLabel`}
                          display={
                            'reviewLabel' in selected && selected.reviewLabel
                              ? selected.reviewLabel
                              : 'Review'
                          }
                        />
                      </a>
                    )}
                  </>
                )}
                {editing && 'reviewUrl' in selected && selected.reviewUrl && (
                  <>
                    {' · '}
                    <TemplateField path={`${selected.pathBase}.reviewUrl`} display="edit review URL" />
                  </>
                )}
              </p>
            </div>
            {'image' in selected && selected.image && (
              <div className="detail-media">
                <TemplateField
                  path={`${selected.pathBase}.image`}
                  as="img"
                  alt={selected.title}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
