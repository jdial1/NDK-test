export type DiffChange = {
  path: string;
  kind: 'changed' | 'added' | 'removed';
  before?: string;
  after?: string;
};

export type DiffSeg = {
  type: 'equal' | 'remove' | 'add';
  text: string;
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === 'object' && !Array.isArray(value);
}

function formatValue(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return JSON.stringify(value);
}

function same(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b) return false;
  if (a == null || b == null) return a === b;
  if (typeof a !== 'object') return false;
  return JSON.stringify(a) === JSON.stringify(b);
}

function pushSeg(segs: DiffSeg[], type: DiffSeg['type'], text: string) {
  if (!text) return;
  const last = segs[segs.length - 1];
  if (last?.type === type) last.text += text;
  else segs.push({ type, text });
}

function mergeSegs(...parts: DiffSeg[][]): DiffSeg[] {
  const out: DiffSeg[] = [];
  for (const part of parts) {
    for (const seg of part) pushSeg(out, seg.type, seg.text);
  }
  return out;
}

function commonPrefixLength(a: string, b: string): number {
  const max = Math.min(a.length, b.length);
  let i = 0;
  while (i < max && a[i] === b[i]) i++;
  return i;
}

function commonSuffixLength(a: string, b: string, prefixLen: number): number {
  const max = Math.min(a.length - prefixLen, b.length - prefixLen);
  let i = 0;
  while (i < max && a[a.length - 1 - i] === b[b.length - 1 - i]) i++;
  return i;
}

function lcsSubsequenceDiff(a: string, b: string): DiffSeg[] {
  const n = a.length;
  const m = b.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const segs: DiffSeg[] = [];
  const rev: DiffSeg[] = [];
  let i = n;
  let j = m;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) {
      rev.push({ type: 'equal', text: a[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      rev.push({ type: 'add', text: b[j - 1] });
      j--;
    } else {
      rev.push({ type: 'remove', text: a[i - 1] });
      i--;
    }
  }

  for (let k = rev.length - 1; k >= 0; k--) {
    pushSeg(segs, rev[k].type, rev[k].text);
  }
  return segs;
}

function findLongestCommonSubstring(a: string, b: string): { ai: number; bi: number; len: number } {
  let bestLen = 0;
  let bestAi = 0;
  let bestBi = 0;
  const n = a.length;
  const m = b.length;
  let prev = new Uint32Array(m + 1);
  let curr = new Uint32Array(m + 1);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a.charCodeAt(i - 1) === b.charCodeAt(j - 1)) {
        const next = prev[j - 1] + 1;
        curr[j] = next;
        if (next > bestLen) {
          bestLen = next;
          bestAi = i - next;
          bestBi = j - next;
        }
      } else {
        curr[j] = 0;
      }
    }
    const swap = prev;
    prev = curr;
    curr = swap;
    curr.fill(0);
  }

  return { ai: bestAi, bi: bestBi, len: bestLen };
}

function tokenize(value: string): string[] {
  return value.match(/\s+|[^\s]+/g) ?? [];
}

function tokenLcsDiff(aTokens: string[], bTokens: string[]): DiffSeg[] {
  const n = aTokens.length;
  const m = bTokens.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] =
        aTokens[i - 1] === bTokens[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const segs: DiffSeg[] = [];
  const rev: DiffSeg[] = [];
  let i = n;
  let j = m;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && aTokens[i - 1] === bTokens[j - 1]) {
      rev.push({ type: 'equal', text: aTokens[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      rev.push({ type: 'add', text: bTokens[j - 1] });
      j--;
    } else {
      rev.push({ type: 'remove', text: aTokens[i - 1] });
      i--;
    }
  }

  for (let k = rev.length - 1; k >= 0; k--) {
    pushSeg(segs, rev[k].type, rev[k].text);
  }
  return segs;
}

function charDiff(a: string, b: string): DiffSeg[] {
  if (!a && !b) return [];
  if (!a) return [{ type: 'add', text: b }];
  if (!b) return [{ type: 'remove', text: a }];
  if (a === b) return [{ type: 'equal', text: a }];

  const n = a.length;
  const m = b.length;

  if (n * m <= 400_000) {
    return lcsSubsequenceDiff(a, b);
  }

  const { ai, bi, len } = findLongestCommonSubstring(a, b);
  const minAnchor = Math.min(32, Math.max(12, Math.floor(Math.min(n, m) * 0.02)));

  if (len >= minAnchor) {
    return mergeSegs(
      charDiff(a.slice(0, ai), b.slice(0, bi)),
      [{ type: 'equal', text: a.slice(ai, ai + len) }],
      charDiff(a.slice(ai + len), b.slice(bi + len))
    );
  }

  const aTokens = tokenize(a);
  const bTokens = tokenize(b);
  if (aTokens.length * bTokens.length <= 400_000) {
    return tokenLcsDiff(aTokens, bTokens);
  }

  return [
    { type: 'remove', text: a },
    { type: 'add', text: b },
  ];
}

export function diffStrings(before: string, after: string): DiffSeg[] {
  if (before === after) return before ? [{ type: 'equal', text: before }] : [];
  if (!before) return [{ type: 'add', text: after }];
  if (!after) return [{ type: 'remove', text: before }];

  const prefix = commonPrefixLength(before, after);
  const suffix = commonSuffixLength(before, after, prefix);
  const aMid = before.slice(prefix, before.length - suffix);
  const bMid = after.slice(prefix, after.length - suffix);
  const sharedSuffix = suffix ? before.slice(before.length - suffix) : '';

  return mergeSegs(
    [{ type: 'equal', text: before.slice(0, prefix) }],
    charDiff(aMid, bMid),
    [{ type: 'equal', text: sharedSuffix }]
  );
}

export function diffValues(before: unknown, after: unknown, path = ''): DiffChange[] {
  if (same(before, after)) return [];

  if (Array.isArray(before) && Array.isArray(after)) {
    const changes: DiffChange[] = [];
    const len = Math.max(before.length, after.length);
    for (let i = 0; i < len; i++) {
      const next = path ? `${path}.${i}` : String(i);
      if (i >= before.length) changes.push(...diffValues(undefined, after[i], next));
      else if (i >= after.length) changes.push(...diffValues(before[i], undefined, next));
      else changes.push(...diffValues(before[i], after[i], next));
    }
    return changes;
  }

  if (isPlainObject(before) && isPlainObject(after)) {
    const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
    const changes: DiffChange[] = [];
    for (const key of keys) {
      const next = path ? `${path}.${key}` : key;
      changes.push(...diffValues(before[key], after[key], next));
    }
    return changes;
  }

  if (before === undefined) {
    if (isPlainObject(after)) {
      return Object.keys(after).flatMap((key) =>
        diffValues(undefined, after[key], path ? `${path}.${key}` : key)
      );
    }
    if (Array.isArray(after)) {
      return after.flatMap((item, i) =>
        diffValues(undefined, item, path ? `${path}.${i}` : String(i))
      );
    }
    return [{ path, kind: 'added', after: formatValue(after) }];
  }

  if (after === undefined) {
    if (isPlainObject(before)) {
      return Object.keys(before).flatMap((key) =>
        diffValues(before[key], undefined, path ? `${path}.${key}` : key)
      );
    }
    if (Array.isArray(before)) {
      return before.flatMap((item, i) =>
        diffValues(item, undefined, path ? `${path}.${i}` : String(i))
      );
    }
    return [{ path, kind: 'removed', before: formatValue(before) }];
  }

  return [
    {
      path,
      kind: 'changed',
      before: formatValue(before),
      after: formatValue(after),
    },
  ];
}
