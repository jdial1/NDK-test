export function getByPath(obj: unknown, path: string): unknown {
  if (!path) return obj;
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc == null || typeof acc !== 'object') return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

export function setByPath<T>(obj: T, path: string, value: unknown): T {
  const keys = path.split('.');
  const root = structuredClone(obj) as unknown;
  let cursor: Record<string, unknown> = root as Record<string, unknown>;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const next = cursor[key];
    if (next == null || typeof next !== 'object') {
      cursor[key] = /^\d+$/.test(keys[i + 1]) ? [] : {};
    } else {
      cursor[key] = Array.isArray(next) ? [...next] : { ...next };
    }
    cursor = cursor[key] as Record<string, unknown>;
  }

  const last = keys[keys.length - 1];
  cursor[last] = value;
  return root as T;
}

export function pathToKey(path: string): string {
  return `%${path}%`;
}

export function valueToEditString(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return JSON.stringify(value, null, 2);
}

export function parseEditString(raw: string, previous: unknown): unknown {
  if (typeof previous === 'string') return raw;
  if (typeof previous === 'number') {
    const n = Number(raw);
    return Number.isFinite(n) ? n : previous;
  }
  if (typeof previous === 'boolean') return raw === 'true';
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}
