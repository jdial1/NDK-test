import { contactDetails, IMAGES } from '../data';

export default function Biography() {
  return (
    <section className="site-stage">
      <div className="about-stage">
        <div className="about-copy project-body">
          <h2 className="project-title">About</h2>
          <div className="about-columns">
            <p>
              Nicole Dial-Kay is a Taos, New Mexico-based curator and writer focusing on exhibitions that
              reflect the diverse cultural histories and contemporary talent of Northern New Mexico. For over
              fifteen years, Dial-Kay has been devoted to organizing ambitious, multi-gallery exhibitions,
              public arts programming, and site-specific installations. She is currently the Curator of
              Exhibitions and Collections at the{' '}
              <a href={contactDetails.harwoodUrl} target="_blank" rel="noopener noreferrer">
                Harwood Museum of Art
              </a>
              , where she considers herself primarily a facilitator, bridging historic legacies—such as the
              Taos Society of Artists and mid-century Taos Moderns—with contemporary Native and Hispanic
              expressions.
              <span className="para-break" />
              Previous roles include Senior Director of Arts + Programming at{' '}
              <a href="https://breckcreate.org/" target="_blank" rel="noopener noreferrer">
                Breckenridge Creative Arts
              </a>
              , Director of Education at the{' '}
              <a href="https://bmoca.org/" target="_blank" rel="noopener noreferrer">
                Boulder Museum of Contemporary Art
              </a>
              , and curatorial positions at the{' '}
              <a href="https://www.colorado.edu/cuartmuseum" target="_blank" rel="noopener noreferrer">
                CU Art Museum
              </a>
              ,{' '}
              <a href="https://www.prattmuseum.org/" target="_blank" rel="noopener noreferrer">
                Pratt Museum
              </a>{' '}
              in Homer, Alaska, and the{' '}
              <a href="https://www.slam.org/" target="_blank" rel="noopener noreferrer">
                Saint Louis Art Museum
              </a>
              . She gained broad acclaim for organizing the pathbreaking 2023 exhibition{' '}
              <i>Out of the Box: The Harwood Centennial Exhibition</i>, charting 100 years of artistic
              innovation in Taos. Dial-Kay has also organized major site-specific and solo projects for
              artists including Raven Chacon, Debbie Long, and Gus Foster, as well as directing the
              large-scale WAVE festival in Colorado.
              <span className="para-break" />
              Her writing has been featured in comprehensive exhibition catalogues published by the Museum of
              New Mexico Press and the Harwood Museum of Art, alongside independent curatorial essays on
              regional practices, environmental art, and public installations. She has been a guest speaker
              and presented critical case studies on public art as a civic engine at platforms such as the
              Colorado Creative Industries Annual Assembly.
              <span className="para-break" />
              She received Master of Arts degrees in Art History from the University of Colorado Boulder and
              in Museum Studies from the University of Missouri, and holds a Bachelor of Arts in Art History
              from Southern Illinois University.
              <span className="para-break" />
              e:{' '}
              <a href={`mailto:${contactDetails.email}`}>
                nicole.dial.kay [at] gmail [dot] com
              </a>
            </p>
          </div>
        </div>
        <div className="about-portrait">
          <img
            src={IMAGES.portrait}
            alt="Nicole Dial-Kay"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
