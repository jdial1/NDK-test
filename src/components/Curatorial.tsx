import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Exhibition, PastHarwoodExhibition } from '../types';
import { useSiteData } from '../context/SiteDataContext';
import TemplateField from './TemplateField';
import JustifiedThumbs from './JustifiedThumbs';

type Selected = (Exhibition | PastHarwoodExhibition) & { pathBase: string };

export default function Curatorial() {
  const { data, mode } = useSiteData();
  const editing = mode === 'edit';
  const [selected, setSelected] = React.useState<Selected | null>(null);

  const thumbs = [
    ...data.exhibitionsData.map((ex, i) => ({
      id: ex.id,
      imagePath: `exhibitionsData.${i}.image`,
      image: ex.image,
      title: ex.title,
      item: { ...ex, pathBase: `exhibitionsData.${i}` } as Selected,
    })),
    ...data.pastExhibitionsData
      .map((ex, i) => ({ ex, i }))
      .filter(({ ex }) => ex.image)
      .map(({ ex, i }) => ({
        id: ex.id,
        imagePath: `pastExhibitionsData.${i}.image`,
        image: ex.image as string,
        title: ex.title,
        item: { ...ex, pathBase: `pastExhibitionsData.${i}` } as Selected,
      })),
  ];

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
          >
            <JustifiedThumbs
              items={thumbs.map(({ id, imagePath, image, title }) => ({
                id,
                imagePath,
                image,
                title,
              }))}
              onSelect={(id) => {
                const match = thumbs.find((t) => t.id === id);
                if (match) setSelected(match.item);
              }}
            />
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
