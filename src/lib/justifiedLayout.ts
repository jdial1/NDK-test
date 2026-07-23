export type LaidOut = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

export const JUSTIFIED_GUTTER = 15;
export const DEFAULT_ASPECT = 1.35;

export function targetRowHeight(containerWidth: number) {
  if (containerWidth < 520) return 140;
  if (containerWidth < 900) return 190;
  return 249;
}

export function layoutJustified(
  items: { id: string; aspect: number }[],
  containerWidth: number,
  targetHeight: number,
  gutter: number,
): { positions: LaidOut[]; height: number } {
  if (!items.length || containerWidth <= 0) {
    return { positions: [], height: 0 };
  }

  const positions: LaidOut[] = [];
  let row: { id: string; aspect: number }[] = [];
  let aspectSum = 0;
  let top = 0;

  const flush = (itemsInRow: { id: string; aspect: number }[], sum: number) => {
    const gaps = Math.max(itemsInRow.length - 1, 0) * gutter;
    const height = Math.max((containerWidth - gaps) / sum, 1);
    let left = 0;
    for (const item of itemsInRow) {
      const width = item.aspect * height;
      positions.push({ id: item.id, left, top, width, height });
      left += width + gutter;
    }
    top += height + gutter;
  };

  for (const item of items) {
    const nextSum = aspectSum + item.aspect;
    const projected = nextSum * targetHeight + Math.max(row.length, 0) * gutter;

    if (row.length > 0 && projected > containerWidth) {
      flush(row, aspectSum);
      row = [item];
      aspectSum = item.aspect;
      continue;
    }

    row.push(item);
    aspectSum = nextSum;
  }

  if (row.length) {
    const gaps = Math.max(row.length - 1, 0) * gutter;
    const natural = aspectSum * targetHeight + gaps;
    if (natural / containerWidth > 0.72) {
      flush(row, aspectSum);
    } else {
      let left = 0;
      for (const item of row) {
        const width = item.aspect * targetHeight;
        positions.push({
          id: item.id,
          left,
          top,
          width,
          height: targetHeight,
        });
        left += width + gutter;
      }
      top += targetHeight;
    }
  }

  return { positions, height: Math.max(top - gutter, 0) };
}
