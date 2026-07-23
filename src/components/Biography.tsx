import TemplateField, { TemplateBlock } from './TemplateField';
import { useSiteData } from '../context/SiteDataContext';

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
                <a href={`mailto:${data.contactDetails.email}`}>
                  <TemplateField path="contactDetails.email" />
                </a>
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
