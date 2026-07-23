import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Writing } from '../types';
import { useSiteData } from '../context/SiteDataContext';
import TemplateField from './TemplateField';
import JustifiedThumbs from './JustifiedThumbs';

type Selected = Writing & { pathBase: string; index: number };

export default function WritingComponent() {
  const { data, mode } = useSiteData();
  const editing = mode === 'edit';
  const [selected, setSelected] = React.useState<Selected | null>(null);

  const thumbs = data.writingsData
    .map((essay, i) => ({ essay, i }))
    .filter(({ essay }) => essay.image)
    .map(({ essay, i }) => ({
      id: essay.id,
      imagePath: `writingsData.${i}.image`,
      image: essay.image as string,
      title: essay.title,
      item: { ...essay, pathBase: `writingsData.${i}`, index: i } as Selected,
    }));

  return (
    <section className="site-stage writing-stage">
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
                ← Selected Writing
              </button>
              <h2 className="project-title">
                <TemplateField path={`${selected.pathBase}.title`} />
              </h2>
              <p className="mb-[21px]">
                <TemplateField path={`${selected.pathBase}.publication`} />
                {' · '}
                <TemplateField path={`${selected.pathBase}.date`} />
              </p>
              <p className="mb-[21px] text-[#666]">
                <TemplateField path={`${selected.pathBase}.type`} />
              </p>
              <p className="mb-[21px]">
                <TemplateField path={`${selected.pathBase}.excerpt`} />
              </p>
              <p className="mt-[21px]">
                {selected.link && (
                  mode === 'template' ? (
                    <TemplateField path={`${selected.pathBase}.link`} />
                  ) : (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={editing ? (e) => e.preventDefault() : undefined}
                    >
                      <TemplateField path={`${selected.pathBase}.link`} display="Read more" />
                    </a>
                  )
                )}
                {selected.amazonLink && (
                  <>
                    {selected.link ? ' · ' : ''}
                    {mode === 'template' ? (
                      <TemplateField path={`${selected.pathBase}.amazonLink`} />
                    ) : (
                      <a
                        href={selected.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={editing ? (e) => e.preventDefault() : undefined}
                      >
                        <TemplateField path={`${selected.pathBase}.amazonLink`} display="Amazon" />
                      </a>
                    )}
                  </>
                )}
                {selected.bamLink && (
                  <>
                    {selected.link || selected.amazonLink ? ' · ' : ''}
                    {mode === 'template' ? (
                      <TemplateField path={`${selected.pathBase}.bamLink`} />
                    ) : (
                      <a
                        href={selected.bamLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={editing ? (e) => e.preventDefault() : undefined}
                      >
                        <TemplateField path={`${selected.pathBase}.bamLink`} display="BAM" />
                      </a>
                    )}
                  </>
                )}
              </p>
            </div>
            {selected.image && (
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
