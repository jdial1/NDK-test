import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { exhibitionsData, pastExhibitionsData } from '../data';
import { Exhibition, PastHarwoodExhibition } from '../types';

type Selected = Exhibition | PastHarwoodExhibition;

export default function Curatorial() {
  const [selected, setSelected] = React.useState<Selected | null>(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const railRef = React.useRef<HTMLDivElement>(null);

  const thumbs: {
    id: string;
    title: string;
    date: string;
    theme: string;
    blurb: string;
    image: string;
    item: Selected;
  }[] = [
    ...exhibitionsData.map((ex) => ({
      id: ex.id,
      title: ex.title,
      date: ex.date,
      theme: ex.category,
      blurb: ex.description,
      image: ex.image,
      item: ex as Selected,
    })),
    ...pastExhibitionsData
      .filter((ex) => ex.image)
      .map((ex) => ({
        id: ex.id,
        title: ex.title,
        date: ex.date,
        theme: 'Harwood',
        blurb: ex.description,
        image: ex.image as string,
        item: ex as Selected,
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
                  aria-label={thumb.title}
                >
                  <span className="thumb-item-image">
                    <img src={thumb.image} alt={thumb.title} referrerPolicy="no-referrer" />
                  </span>
                  <span className="thumb-caption">
                    <span className="thumb-theme">{thumb.theme}</span>
                    <span className="thumb-title">{thumb.title}</span>
                    <span className="thumb-date">{thumb.date}</span>
                    <span className="thumb-blurb">{thumb.blurb}</span>
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
              <h2 className="project-title">{selected.title}</h2>
              <p className="mb-[21px]">
                {'date' in selected ? selected.date : ''}
                {'location' in selected && selected.location ? ` · ${selected.location}` : ''}
              </p>
              <p className="mb-[21px]">{selected.description}</p>
              {'details' in selected && selected.details?.map((detail, idx) => (
                <p key={idx} className="mb-[14px] text-[#666]">
                  {detail}
                </p>
              ))}
              {'curatorialDetails' in selected &&
                selected.curatorialDetails?.map((detail, idx) => (
                  <p key={idx} className="mb-[14px] text-[#666]">
                    {detail}
                  </p>
                ))}
              <p className="mt-[21px]">
                {selected.link && (
                  <a href={selected.link} target="_blank" rel="noopener noreferrer">
                    Exhibition page
                  </a>
                )}
                {'reviewUrl' in selected && selected.reviewUrl && (
                  <>
                    {selected.link ? ' · ' : ''}
                    <a href={selected.reviewUrl} target="_blank" rel="noopener noreferrer">
                      {selected.reviewLabel || 'Review'}
                    </a>
                  </>
                )}
              </p>
            </div>
            {'image' in selected && selected.image && (
              <div className="detail-media">
                <img
                  src={selected.image}
                  alt={selected.title}
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
