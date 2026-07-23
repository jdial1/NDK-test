import React from 'react';
import {
  ArrowLeft,
  Check,
  Copy,
  Diff,
  Download,
  Eye,
  GripHorizontal,
  MoveDiagonal2,
  PenLine,
  Plus,
  RotateCcw,
  Trash2,
  X,
} from 'lucide-react';
import { siteData as seedData } from '../data';
import {
  ActiveSection,
  ListKey,
  parseListItemPath,
  useFieldEditString,
  useSiteData,
} from '../context/SiteDataContext';
import { diffStrings, diffValues } from '../lib/diff';
import { getByPath, pathToKey } from '../lib/path';

type FieldDef = {
  key: string;
  label: string;
  hint: string;
  rows?: number;
};

function InlineDiff({
  before = '',
  after = '',
  kind,
}: {
  before?: string;
  after?: string;
  kind: 'changed' | 'added' | 'removed';
}) {
  if (kind === 'added') {
    return <span className="edit-diff-new">{after || '∅'}</span>;
  }
  if (kind === 'removed') {
    return (
      <>
        <span className="edit-diff-old">{before || '∅'}</span>
        <span className="edit-diff-arrow">→</span>
        <span className="edit-diff-removed">removed</span>
      </>
    );
  }

  const segs = diffStrings(before, after);
  return (
    <span className="edit-diff-inline">
      {segs.map((seg, i) => (
        <span
          key={`${seg.type}-${i}`}
          className={
            seg.type === 'equal'
              ? 'edit-diff-same'
              : seg.type === 'remove'
                ? 'edit-diff-old'
                : 'edit-diff-new'
          }
        >
          {seg.text}
        </span>
      ))}
    </span>
  );
}

const WRITING_FIELDS: FieldDef[] = [
  { key: 'title', label: 'Title', hint: 'Main list text', rows: 2 },
  { key: 'publication', label: 'Publication', hint: 'Publisher or venue' },
  { key: 'date', label: 'Date', hint: 'e.g. June 2023' },
  { key: 'type', label: 'Type', hint: 'Essay, catalogue, case study…' },
  { key: 'excerpt', label: 'Excerpt', hint: 'Short description', rows: 4 },
  { key: 'link', label: 'Link', hint: 'Primary URL' },
  { key: 'amazonLink', label: 'Amazon link', hint: 'Optional' },
  { key: 'bamLink', label: 'BAM link', hint: 'Optional' },
];

const PRESS_FIELDS: FieldDef[] = [
  { key: 'title', label: 'Title', hint: 'Main list text', rows: 2 },
  { key: 'source', label: 'Source', hint: 'Publication name' },
  { key: 'date', label: 'Date', hint: 'e.g. March 2022' },
  { key: 'category', label: 'Category', hint: 'Review, Interview, or Feature' },
  { key: 'quote', label: 'Quote', hint: 'Pull quote or description', rows: 4 },
  { key: 'link', label: 'Link', hint: 'Article URL' },
];

const EXHIBITION_FIELDS: FieldDef[] = [
  { key: 'title', label: 'Title', hint: 'Exhibition title', rows: 2 },
  { key: 'artist', label: 'Artist', hint: 'Optional' },
  { key: 'role', label: 'Role', hint: 'e.g. Curator' },
  { key: 'date', label: 'Date', hint: 'Display date range' },
  { key: 'year', label: 'Year', hint: 'Numeric year' },
  { key: 'location', label: 'Location', hint: 'Venue and city' },
  { key: 'category', label: 'Category', hint: 'Solo, Group, Centennial…' },
  { key: 'featured', label: 'Featured', hint: 'true or false' },
  { key: 'image', label: 'Image URL', hint: 'Featured image', rows: 2 },
  { key: 'description', label: 'Description', hint: 'Main copy', rows: 4 },
  { key: 'details', label: 'Details', hint: 'One bullet per line', rows: 4 },
  { key: 'link', label: 'Link', hint: 'Exhibition page URL' },
  { key: 'reviewUrl', label: 'Review URL', hint: 'Optional' },
  { key: 'reviewLabel', label: 'Review label', hint: 'Optional' },
];

const PAST_EXHIBITION_FIELDS: FieldDef[] = [
  { key: 'title', label: 'Title', hint: 'Exhibition title', rows: 2 },
  { key: 'artist', label: 'Artist', hint: 'Optional' },
  { key: 'date', label: 'Date', hint: 'Display date range' },
  { key: 'caption', label: 'Caption', hint: 'Optional image caption' },
  { key: 'image', label: 'Image URL', hint: 'Optional', rows: 2 },
  { key: 'description', label: 'Description', hint: 'Main copy', rows: 4 },
  { key: 'curatorialDetails', label: 'Details', hint: 'One bullet per line', rows: 4 },
  { key: 'link', label: 'Link', hint: 'Exhibition page URL' },
  { key: 'reviewUrl', label: 'Review URL', hint: 'Optional' },
  { key: 'reviewLabel', label: 'Review label', hint: 'Optional' },
];

function fieldsFor(key: ListKey) {
  if (key === 'writingsData') return WRITING_FIELDS;
  if (key === 'pressData') return PRESS_FIELDS;
  if (key === 'exhibitionsData') return EXHIBITION_FIELDS;
  return PAST_EXHIBITION_FIELDS;
}

function itemToForm(item: Record<string, unknown> | undefined, defs: FieldDef[]) {
  const form: Record<string, string> = {};
  for (const def of defs) {
    const value = item?.[def.key];
    if (Array.isArray(value)) form[def.key] = value.join('\n');
    else if (typeof value === 'boolean') form[def.key] = value ? 'true' : 'false';
    else if (value == null) form[def.key] = '';
    else form[def.key] = String(value);
  }
  return form;
}

function collectionGroups(section: ActiveSection): { key: ListKey; label: string; addLabel: string }[] {
  if (section === 'writing') {
    return [{ key: 'writingsData', label: 'Selected Writing', addLabel: 'Add writing' }];
  }
  if (section === 'press') {
    return [{ key: 'pressData', label: 'Selected Press', addLabel: 'Add press' }];
  }
  if (section === 'exhibitions') {
    return [
      { key: 'exhibitionsData', label: 'Featured exhibitions', addLabel: 'Add exhibition' },
      { key: 'pastExhibitionsData', label: 'Past Harwood exhibitions', addLabel: 'Add past exhibition' },
    ];
  }
  return [];
}

function itemLabel(key: ListKey, index: number): string {
  if (key === 'writingsData') return `Writing #${index + 1}`;
  if (key === 'pressData') return `Press #${index + 1}`;
  if (key === 'exhibitionsData') return `Exhibition #${index + 1}`;
  return `Past #${index + 1}`;
}

type Panel = 'edit' | 'preview' | 'diff';

const iconProps = { size: 14, strokeWidth: 1.4, absoluteStrokeWidth: false as const };

export default function EditModal() {
  const {
    data,
    mode,
    activeSection,
    previewing,
    diffing,
    selectedPath,
    dirty,
    setFieldValue,
    setItemFields,
    selectField,
    clearSelection,
    setPreviewing,
    setDiffing,
    downloadSave,
    exportCondensedJson,
    resetData,
    addListItem,
    removeListItem,
  } = useSiteData();

  const listItem = parseListItemPath(selectedPath);
  const fieldDefs = listItem ? fieldsFor(listItem.key) : null;
  const itemRecord = listItem
    ? (getByPath(data, selectedPath!) as Record<string, unknown> | undefined)
    : undefined;
  const groups = collectionGroups(activeSection);
  const isCollectionSection = groups.length > 0;

  const [pos, setPos] = React.useState({ x: 24, y: 72 });
  const [size, setSize] = React.useState(() => ({
    w: Math.round(360 * 1.25),
    h: Math.round(window.innerHeight * 0.8),
  }));
  const [dragging, setDragging] = React.useState(false);
  const [resizing, setResizing] = React.useState(false);
  const dragOffset = React.useRef({ x: 0, y: 0 });
  const resizeStart = React.useRef({ x: 0, y: 0, w: size.w, h: size.h });
  const draft = useFieldEditString(listItem || isCollectionSection ? null : selectedPath);
  const [localValue, setLocalValue] = React.useState(draft);
  const [itemForm, setItemForm] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState('');

  const changes = React.useMemo(() => diffValues(seedData, data), [data]);
  const panel: Panel = diffing ? 'diff' : previewing ? 'preview' : 'edit';

  React.useEffect(() => {
    setLocalValue(draft);
  }, [draft, selectedPath]);

  React.useEffect(() => {
    if (!listItem || !fieldDefs) {
      setItemForm({});
      return;
    }
    setItemForm(itemToForm(itemRecord, fieldDefs));
  }, [selectedPath]);

  React.useEffect(() => {
    if (!dragging) return;

    const onMove = (e: PointerEvent) => {
      setPos({
        x: Math.max(8, Math.min(e.clientX - dragOffset.current.x, window.innerWidth - 80)),
        y: Math.max(8, Math.min(e.clientY - dragOffset.current.y, window.innerHeight - 80)),
      });
    };
    const onUp = () => setDragging(false);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [dragging]);

  React.useEffect(() => {
    if (!resizing) return;

    const onMove = (e: PointerEvent) => {
      const dw = e.clientX - resizeStart.current.x;
      const dh = e.clientY - resizeStart.current.y;
      const maxW = Math.max(280, window.innerWidth - pos.x - 8);
      const maxH = Math.max(200, window.innerHeight - pos.y - 8);
      setSize({
        w: Math.min(maxW, Math.max(280, resizeStart.current.w + dw)),
        h: Math.min(maxH, Math.max(200, resizeStart.current.h + dh)),
      });
    };
    const onUp = () => setResizing(false);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [resizing, pos.x, pos.y]);

  if (mode !== 'edit') return null;

  const applyFieldLocal = () => {
    if (!listItem && !isCollectionSection && selectedPath) {
      setFieldValue(selectedPath, localValue);
    }
  };

  const saveItem = () => {
    if (!listItem) return;
    setItemFields(listItem, itemForm);
    clearSelection();
    setStatus('Item saved');
  };

  const openDiff = () => {
    applyFieldLocal();
    setDiffing(true);
    setStatus('');
  };

  const openPreview = () => {
    applyFieldLocal();
    setPreviewing(true);
    setStatus('');
  };

  const backToEdit = () => {
    setPreviewing(false);
    setDiffing(false);
    setStatus('');
  };

  const onDragStart = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, textarea, input, a, label, .edit-modal-resize')) return;
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    setDragging(true);
  };

  const onResizeStart = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    resizeStart.current = { x: e.clientX, y: e.clientY, w: size.w, h: size.h };
    setResizing(true);
  };

  if (panel === 'preview') {
    return (
      <button
        type="button"
        className="edit-preview-chip"
        onClick={backToEdit}
        aria-label="Exit preview and return to editor"
        title="Back to edit"
      >
        <PenLine {...iconProps} />
        <span>Edit</span>
      </button>
    );
  }

  const title =
    panel === 'diff'
      ? 'Diff'
      : listItem
        ? itemLabel(listItem.key, listItem.index)
        : isCollectionSection
          ? groups[0]?.label ?? 'Edit'
          : 'Edit';

  return (
    <div
      className={`edit-modal ${dragging ? 'is-dragging' : ''} ${resizing ? 'is-resizing' : ''} ${panel === 'diff' ? 'is-diff' : ''} ${listItem || isCollectionSection ? 'is-item' : ''}`}
      style={{ left: pos.x, top: pos.y, width: size.w, height: size.h }}
      onPointerDown={onDragStart}
      role="dialog"
      aria-label="Template editor"
    >
      <div className="edit-modal-bar">
        <span className="edit-modal-title">
          {panel === 'diff' ? <Diff {...iconProps} /> : <PenLine {...iconProps} />}
          <span>{title}</span>
        </span>
        <span className="edit-modal-hint" aria-hidden="true">
          <GripHorizontal {...iconProps} />
          <MoveDiagonal2 {...iconProps} />
        </span>
      </div>

      <div className="edit-modal-body">
        {panel === 'diff' && (
          <div className="edit-diff">
            <p className="edit-modal-item-lead">
              {changes.length
                ? `${changes.length} change${changes.length === 1 ? '' : 's'} vs src/data.ts`
                : 'No changes yet.'}
              {dirty && changes.length ? '' : dirty ? ' Draft marked dirty.' : ''}
            </p>
            <div className="edit-diff-list">
              {changes.map((change) => (
                <div key={`${change.kind}:${change.path}`} className="edit-diff-row">
                  <div className="edit-diff-path">{pathToKey(change.path)}</div>
                  <div className="edit-diff-values">
                    <InlineDiff
                      kind={change.kind}
                      before={change.before}
                      after={change.after}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {panel === 'edit' && isCollectionSection && !listItem && (
          <div className="edit-collection">
            {groups.map((group) => {
              const items = data[group.key] as { id: string; title?: string }[];
              return (
                <div key={group.key} className="edit-collection-group">
                  <div className="edit-collection-label">{group.label}</div>
                  <div className="edit-collection-list">
                    {items.map((item, i) => (
                      <div key={item.id} className="edit-collection-row">
                        <button
                          type="button"
                          className="edit-collection-select"
                          onClick={() => selectField(`${group.key}.${i}`)}
                        >
                          <span className="edit-collection-index">{i + 1}</span>
                          <span className="edit-collection-title">
                            {item.title || 'Untitled'}
                          </span>
                        </button>
                        <div className="edit-collection-actions">
                          <button
                            type="button"
                            className="edit-modal-btn"
                            onClick={() => selectField(`${group.key}.${i}`)}
                          >
                            <PenLine {...iconProps} />
                            <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            className="edit-modal-btn"
                            onClick={() => removeListItem(group.key, i)}
                          >
                            <Trash2 {...iconProps} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="edit-modal-btn edit-collection-add"
                    onClick={() => addListItem(group.key)}
                  >
                    <Plus {...iconProps} />
                    <span>{group.addLabel}</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {panel === 'edit' && listItem && fieldDefs && (
          <div className="edit-modal-item">
            <button
              type="button"
              className="edit-modal-back"
              onClick={() => {
                clearSelection();
                setStatus('');
              }}
            >
              <ArrowLeft {...iconProps} />
              <span>Back to list</span>
            </button>
            <p className="edit-modal-item-lead">
              Edit fields below, then Save to apply and return to the list.
            </p>
            <div className="edit-modal-item-fields">
              {fieldDefs.map((def) => (
                <label key={def.key} className="edit-modal-field">
                  <span className="edit-modal-field-label">{def.label}</span>
                  <span className="edit-modal-field-hint">{def.hint}</span>
                  {def.rows && def.rows > 1 ? (
                    <textarea
                      className="edit-modal-field-input"
                      rows={def.rows}
                      value={itemForm[def.key] ?? ''}
                      onChange={(e) =>
                        setItemForm((prev) => ({ ...prev, [def.key]: e.target.value }))
                      }
                      spellCheck={false}
                    />
                  ) : (
                    <input
                      className="edit-modal-field-input"
                      type="text"
                      value={itemForm[def.key] ?? ''}
                      onChange={(e) =>
                        setItemForm((prev) => ({ ...prev, [def.key]: e.target.value }))
                      }
                      spellCheck={false}
                    />
                  )}
                </label>
              ))}
            </div>
            <div className="edit-modal-item-actions">
              <button type="button" className="edit-modal-btn edit-modal-btn-primary" onClick={saveItem}>
                <Check {...iconProps} />
                <span>Save</span>
              </button>
              <button
                type="button"
                className="edit-modal-btn"
                onClick={() => {
                  clearSelection();
                  setStatus('');
                }}
              >
                <X {...iconProps} />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}

        {panel === 'edit' && !isCollectionSection && !listItem && (
          <div className="edit-modal-field-panel">
            <div className="edit-modal-path">
              {selectedPath ? pathToKey(selectedPath) : 'Select a field on About to edit'}
            </div>
            {selectedPath ? (
              <textarea
                className="edit-modal-input"
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                onBlur={applyFieldLocal}
                spellCheck={false}
              />
            ) : (
              <div className="edit-modal-empty">Click a field on About to begin editing.</div>
            )}
          </div>
        )}
      </div>

      {status && <div className="edit-modal-status">{status}</div>}

      <footer className="edit-modal-footer">
        {panel === 'diff' ? (
          <button type="button" className="edit-modal-btn" onClick={backToEdit}>
            <PenLine {...iconProps} />
            <span>Edit</span>
          </button>
        ) : (
          <button type="button" className="edit-modal-btn" onClick={openPreview}>
            <Eye {...iconProps} />
            <span>Preview</span>
          </button>
        )}
        <button
          type="button"
          className={`edit-modal-btn ${panel === 'diff' ? 'is-active' : ''}`}
          onClick={panel === 'diff' ? backToEdit : openDiff}
        >
          <Diff {...iconProps} />
          <span>Diff{changes.length ? ` (${changes.length})` : ''}</span>
        </button>
        <button
          type="button"
          className="edit-modal-btn edit-modal-btn-primary"
          onClick={() => {
            applyFieldLocal();
            downloadSave();
            setStatus('Saved site-data.json — update src/data.ts');
          }}
        >
          <Download {...iconProps} />
          <span>Export</span>
        </button>
        <button
          type="button"
          className="edit-modal-btn"
          onClick={async () => {
            applyFieldLocal();
            await navigator.clipboard.writeText(exportCondensedJson());
            setStatus('Copied condensed JSON');
          }}
        >
          <Copy {...iconProps} />
          <span>Copy</span>
        </button>
        <button
          type="button"
          className="edit-modal-btn"
          onClick={() => {
            resetData();
            setPreviewing(false);
            setDiffing(false);
            setStatus('Reset to source');
          }}
        >
          <RotateCcw {...iconProps} />
          <span>Reset</span>
        </button>
      </footer>

      <button
        type="button"
        className="edit-modal-resize"
        aria-label="Resize editor"
        onPointerDown={onResizeStart}
      />
    </div>
  );
}
