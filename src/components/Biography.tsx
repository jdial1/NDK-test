import TemplateField, { TemplateBlock } from './TemplateField';
import { useSiteData } from '../context/SiteDataContext';

function obfuscateEmail(email: string): string {
  const [local = '', domain = ''] = email.split('@');
  const parts = domain.split('.').filter(Boolean);
  const tld = parts.pop() || 'com';
  const host = parts.join('.') || domain;
  return `${local} [at] ${host} [dot] ${tld},`;
}

export default function Biography() {
  const { data, mode, previewing, diffing } = useSiteData();
  const live = mode === 'live' || (mode === 'edit' && (previewing || diffing));

  return (
    <section className="site-stage">
      <div className="about-stage">
        <div className="about-copy project-body">
          <h2 className="project-title">About</h2>
          <div className="about-columns">
            <p>
              <TemplateBlock path="bioSummary" />
              <span className="para-break" />
              e:{' '}
              {live ? (
                obfuscateEmail(data.contactDetails.email)
              ) : (
                <TemplateField path="contactDetails.email" />
              )}
            </p>
          </div>
        </div>
        <div className="about-portrait">
          <TemplateField path="IMAGES.portrait" as="img" alt="Nicole Dial-Kay" />
        </div>
      </div>
    </section>
  );
}
