import React from 'react';
import { useLocation } from 'react-router-dom';
import { siteData as seedData } from '../data';
import {
  Exhibition,
  PastHarwoodExhibition,
  Press,
  SiteData,
  ViewMode,
  Writing,
} from '../types';
import { getByPath, parseEditString, setByPath, valueToEditString } from '../lib/path';

export type ListKey =
  | 'writingsData'
  | 'pressData'
  | 'exhibitionsData'
  | 'pastExhibitionsData';

export type ListItemSelection = { key: ListKey; index: number };

export type ActiveSection = 'about' | 'exhibitions' | 'writing' | 'press';

interface SiteDataContextValue {
  data: SiteData;
  mode: ViewMode;
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  previewing: boolean;
  diffing: boolean;
  selectedPath: string | null;
  dirty: boolean;
  selectField: (path: string) => void;
  clearSelection: () => void;
  setFieldValue: (path: string, raw: string) => void;
  setItemFields: (selection: ListItemSelection, fields: Record<string, string>) => void;
  setPreviewing: (value: boolean) => void;
  setDiffing: (value: boolean) => void;
  exportCondensedJson: () => string;
  downloadSave: () => void;
  resetData: () => void;
  addListItem: (key: ListKey) => void;
  removeListItem: (key: ListKey, index: number) => void;
}

const SiteDataContext = React.createContext<SiteDataContextValue | null>(null);

function modeFromPath(pathname: string): ViewMode {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/edit') return 'edit';
  if (clean === '/template') return 'template';
  return 'live';
}

function blankWriting(): Writing {
  return {
    id: `writing-${Date.now()}`,
    title: 'New writing',
    publication: '',
    date: '',
    type: '',
    excerpt: '',
    link: '',
  };
}

function blankPress(): Press {
  return {
    id: `press-${Date.now()}`,
    title: 'New press item',
    source: '',
    date: '',
    quote: '',
    category: 'Feature',
    link: '',
    exhibitionId: '',
  };
}

function blankExhibition(): Exhibition {
  return {
    id: `exhibition-${Date.now()}`,
    title: 'New exhibition',
    role: 'Curator',
    date: '',
    year: new Date().getFullYear(),
    location: '',
    category: 'Solo',
    featured: false,
    image: '',
    description: '',
    details: [],
    link: '',
  };
}

function blankPastExhibition(): PastHarwoodExhibition {
  return {
    id: `past-${Date.now()}`,
    title: 'New past exhibition',
    date: '',
    description: '',
    image: '',
    curatorialDetails: [],
    link: '',
  };
}

export function parseListItemPath(path: string | null): ListItemSelection | null {
  if (!path) return null;
  const match =
    /^(writingsData|pressData|exhibitionsData|pastExhibitionsData)\.(\d+)$/.exec(path);
  if (!match) return null;
  return { key: match[1] as ListKey, index: Number(match[2]) };
}

export function SiteDataProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const mode = modeFromPath(location.pathname);
  const [data, setData] = React.useState<SiteData>(() => structuredClone(seedData));
  const [activeSection, setActiveSectionState] = React.useState<ActiveSection>('about');
  const [selectedPath, setSelectedPath] = React.useState<string | null>(null);
  const [previewing, setPreviewingState] = React.useState(false);
  const [diffing, setDiffingState] = React.useState(false);
  const [dirty, setDirty] = React.useState(false);
  const dataRef = React.useRef(data);
  dataRef.current = data;

  React.useEffect(() => {
    if (mode !== 'edit') {
      setPreviewingState(false);
      setDiffingState(false);
      setSelectedPath(null);
    }
  }, [mode]);

  const setActiveSection = React.useCallback((section: ActiveSection) => {
    setActiveSectionState(section);
    setSelectedPath(null);
  }, []);

  const setPreviewing = React.useCallback((value: boolean) => {
    setPreviewingState(value);
    if (value) setDiffingState(false);
  }, []);

  const setDiffing = React.useCallback((value: boolean) => {
    setDiffingState(value);
    if (value) setPreviewingState(false);
  }, []);

  const selectField = React.useCallback((path: string) => {
    setSelectedPath(path);
    setPreviewingState(false);
    setDiffingState(false);
  }, []);

  const clearSelection = React.useCallback(() => {
    setSelectedPath(null);
  }, []);

  const setFieldValue = React.useCallback((path: string, raw: string) => {
    setData((prev) => {
      const previous = getByPath(prev, path);
      return setByPath(prev, path, parseEditString(raw, previous));
    });
    setDirty(true);
  }, []);

  const setItemFields = React.useCallback(
    (selection: ListItemSelection, fields: Record<string, string>) => {
      setData((prev) => {
        const next = structuredClone(prev);
        const item = next[selection.key][selection.index] as Record<string, unknown>;
        if (!item) return prev;

        for (const [field, value] of Object.entries(fields)) {
          if (field === 'id') continue;
          const trimmed = value.trim();

          if (field === 'details' || field === 'curatorialDetails') {
            item[field] = value
              .split('\n')
              .map((line) => line.trim())
              .filter(Boolean);
            continue;
          }

          if (field === 'year') {
            item[field] = Number(trimmed) || 0;
            continue;
          }

          if (field === 'featured') {
            item[field] = trimmed === 'true' || trimmed === '1' || trimmed === 'yes';
            continue;
          }

          if (
            trimmed === '' &&
            (field === 'amazonLink' ||
              field === 'bamLink' ||
              field === 'link' ||
              field === 'reviewUrl' ||
              field === 'reviewLabel' ||
              field === 'artist' ||
              field === 'caption' ||
              field === 'image' ||
              field === 'fullText')
          ) {
            delete item[field];
          } else {
            item[field] = value;
          }
        }

        return next;
      });
      setDirty(true);
    },
    []
  );

  const addListItem = React.useCallback((key: ListKey) => {
    const index = dataRef.current[key].length;
    setData((prev) => {
      const next = structuredClone(prev);
      if (key === 'writingsData') next.writingsData.push(blankWriting());
      else if (key === 'pressData') next.pressData.push(blankPress());
      else if (key === 'exhibitionsData') next.exhibitionsData.push(blankExhibition());
      else next.pastExhibitionsData.push(blankPastExhibition());
      return next;
    });
    setSelectedPath(`${key}.${index}`);
    setPreviewingState(false);
    setDiffingState(false);
    setDirty(true);
  }, []);

  const removeListItem = React.useCallback((key: ListKey, index: number) => {
    setData((prev) => {
      const next = structuredClone(prev);
      next[key] = next[key].filter((_, i) => i !== index) as typeof next[typeof key];
      return next;
    });
    setSelectedPath((path) => {
      const selected = parseListItemPath(path);
      if (selected?.key === key && selected.index === index) return null;
      if (path?.startsWith(`${key}.`)) return null;
      return path;
    });
    setDirty(true);
  }, []);

  const exportCondensedJson = React.useCallback(() => JSON.stringify(dataRef.current), []);

  const downloadSave = React.useCallback(() => {
    const blob = new Blob([JSON.stringify(dataRef.current)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'site-data.json';
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const resetData = React.useCallback(() => {
    setData(structuredClone(seedData));
    setDirty(false);
    setSelectedPath(null);
  }, []);

  const value: SiteDataContextValue = {
    data,
    mode,
    activeSection,
    setActiveSection,
    previewing,
    diffing,
    selectedPath,
    dirty,
    selectField,
    clearSelection,
    setFieldValue,
    setItemFields,
    setPreviewing,
    setDiffing,
    exportCondensedJson,
    downloadSave,
    resetData,
    addListItem,
    removeListItem,
  };

  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>;
}

export function useSiteData() {
  const ctx = React.useContext(SiteDataContext);
  if (!ctx) throw new Error('useSiteData requires SiteDataProvider');
  return ctx;
}

export function useFieldValue(path: string): unknown {
  const { data } = useSiteData();
  return getByPath(data, path);
}

export function useFieldEditString(path: string | null): string {
  const { data } = useSiteData();
  if (!path) return '';
  return valueToEditString(getByPath(data, path));
}
