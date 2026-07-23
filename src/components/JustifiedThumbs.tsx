import React from 'react';
import TemplateField from './TemplateField';
import {
  DEFAULT_ASPECT,
  JUSTIFIED_GUTTER,
  layoutJustified,
  targetRowHeight,
} from '../lib/justifiedLayout';

export type JustifiedThumb = {
  id: string;
  imagePath: string;
  image: string;
  title: string;
};

type Props = {
  items: JustifiedThumb[];
  onSelect: (id: string) => void;
};

export default function JustifiedThumbs({ items, onSelect }: Props) {
  const [aspects, setAspects] = React.useState<Record<string, number>>({});
  const [containerWidth, setContainerWidth] = React.useState(0);
  const gridRef = React.useRef<HTMLDivElement>(null);
  const imageKey = items.map((t) => `${t.id}:${t.image}`).join('|');

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const measure = () => setContainerWidth(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items.length]);

  React.useEffect(() => {
    let cancelled = false;
    items.forEach(({ id, image }) => {
      if (!image) return;
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.onload = () => {
        if (cancelled || !img.naturalWidth || !img.naturalHeight) return;
        const next = img.naturalWidth / img.naturalHeight;
        setAspects((prev) => (prev[id] === next ? prev : { ...prev, [id]: next }));
      };
      img.src = image;
    });
    return () => {
      cancelled = true;
    };
  }, [imageKey]);

  const rowH = targetRowHeight(containerWidth);
  const { positions, height: gridHeight } = layoutJustified(
    items.map((t) => ({ id: t.id, aspect: aspects[t.id] ?? DEFAULT_ASPECT })),
    containerWidth,
    rowH,
    JUSTIFIED_GUTTER,
  );
  const positionById = new Map(positions.map((p) => [p.id, p]));

  return (
    <div className="thumb-rail">
      <div
        ref={gridRef}
        className="thumb-stage"
        style={{ height: gridHeight || undefined }}
      >
        {items.map((thumb) => {
          const pos = positionById.get(thumb.id);
          return (
            <button
              key={thumb.id}
              type="button"
              className="thumb-item"
              onClick={() => onSelect(thumb.id)}
              aria-label={thumb.title}
              style={
                pos
                  ? {
                      left: pos.left,
                      top: pos.top,
                      width: pos.width,
                      height: pos.height,
                    }
                  : undefined
              }
            >
              <span className="thumb-item-image">
                <TemplateField path={thumb.imagePath} as="img" alt="" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
