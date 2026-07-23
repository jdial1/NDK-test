import React from 'react';
import { pathToKey } from '../lib/path';
import { useFieldValue, useSiteData } from '../context/SiteDataContext';

interface TemplateFieldProps {
  path: string;
  className?: string;
  as?: 'text' | 'img';
  alt?: string;
  display?: string;
}

export default function TemplateField({
  path,
  className = '',
  as = 'text',
  alt = '',
  display,
}: TemplateFieldProps) {
  const { mode, previewing, diffing, selectedPath, selectField, activeSection } = useSiteData();
  const value = useFieldValue(path);
  const collectionPath =
    /^(writingsData|pressData|exhibitionsData|pastExhibitionsData)(\.|$)/.test(path);
  const editing =
    mode === 'edit' &&
    !previewing &&
    !diffing &&
    !collectionPath &&
    activeSection === 'about';
  const isSelected = selectedPath === path;
  const keyLabel = pathToKey(path);

  const onSelect = (e: React.SyntheticEvent) => {
    if (!editing) return;
    e.preventDefault();
    e.stopPropagation();
    selectField(path);
  };

  if (mode === 'template') {
    if (as === 'img') {
      return (
        <span className={`template-key template-key-img ${className}`.trim()} title={keyLabel}>
          {keyLabel}
        </span>
      );
    }
    return (
      <span className={`template-key ${className}`.trim()} title={keyLabel}>
        {keyLabel}
      </span>
    );
  }

  if (as === 'img') {
    const src = String(value ?? '');
    if (editing) {
      return (
        <span
          role="button"
          tabIndex={0}
          className={`template-edit template-edit-img ${isSelected ? 'is-selected' : ''} ${className}`.trim()}
          onClick={onSelect}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onSelect(e);
          }}
          aria-label={`Edit ${path}`}
        >
          {src ? (
            <img src={src} alt={alt} referrerPolicy="no-referrer" />
          ) : (
            <span className="template-key">{keyLabel}</span>
          )}
        </span>
      );
    }
    return src ? (
      <img src={src} alt={alt} className={className || undefined} referrerPolicy="no-referrer" />
    ) : null;
  }

  const text = display ?? (value == null ? '' : String(value));

  if (editing) {
    return (
      <span
        role="button"
        tabIndex={0}
        className={`template-edit ${isSelected ? 'is-selected' : ''} ${className}`.trim()}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onSelect(e);
        }}
        aria-label={`Edit ${path}`}
      >
        {text || keyLabel}
      </span>
    );
  }

  return className ? <span className={className}>{text}</span> : <>{text}</>;
}

export function TemplateBlock({ path, className = '' }: { path: string; className?: string }) {
  const { mode, previewing, diffing, selectedPath, selectField, activeSection } = useSiteData();
  const value = useFieldValue(path);
  const editing =
    mode === 'edit' && !previewing && !diffing && activeSection === 'about';
  const keyLabel = pathToKey(path);
  const text = value == null ? '' : String(value);
  const paragraphs = text.split(/\n\n+/).filter(Boolean);

  if (mode === 'template') {
    return (
      <span className={`template-key template-key-block ${className}`.trim()} title={keyLabel}>
        {keyLabel}
      </span>
    );
  }

  if (editing) {
    return (
      <span
        role="button"
        tabIndex={0}
        className={`template-edit template-edit-block ${selectedPath === path ? 'is-selected' : ''} ${className}`.trim()}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          selectField(path);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectField(path);
          }
        }}
        aria-label={`Edit ${path}`}
      >
        {paragraphs.map((p, i) => (
          <span key={i} className="template-edit-para">
            {p}
            {i < paragraphs.length - 1 ? <span className="para-break" /> : null}
          </span>
        ))}
      </span>
    );
  }

  return (
    <>
      {paragraphs.map((p, i) => (
        <React.Fragment key={i}>
          {p}
          {i < paragraphs.length - 1 ? <span className="para-break" /> : null}
        </React.Fragment>
      ))}
    </>
  );
}
