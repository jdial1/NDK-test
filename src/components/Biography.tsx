import { contactDetails, IMAGES } from '../data';

export default function Biography() {
  return (
    <section className="site-stage">
      <div className="about-stage">
        <div className="about-copy project-body">
          <h2 className="project-title">About</h2>
          <div className="about-columns">
            <p>
              Nicole Dial-Kay is a Taos-based curator and writer focusing on the intersection of historic,
              modern, and contemporary art in Northern New Mexico. She is Curator of Exhibitions and
              Collections at the{' '}
              <a href={contactDetails.harwoodUrl} target="_blank" rel="noopener noreferrer">
                Harwood Museum of Art
              </a>{' '}
              of the University of New Mexico, where she oversees a collection of over 4,700 works spanning
              Hispanic Devotional Art, the Taos Society of Artists, Taos Moderns, and contemporary regional
              expression.
              <span className="para-break" />
              For over fifteen years, Dial-Kay has organized exhibitions and public commissions that place
              mid-century modernism in dialogue with living artists. Previous roles include Senior Director
              of Arts + Programming at{' '}
              <a href="https://breckcreate.org/" target="_blank" rel="noopener noreferrer">
                Breckenridge Creative Arts
              </a>
              , where she co-curated the annual WAVE: Light + Water + Sound festival, and Director of
              Education at the Boulder Museum of Contemporary Art. She gained{' '}
              <a
                href="https://www.santafenewmexican.com/pasatiempo/art/harwood-at-a-hundred/article_e056d296-bc59-11ed-896e-b70bcf920f38.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                broad recognition
              </a>{' '}
              for organizing the pathbreaking{' '}
              <i>Out of the Box: The Harwood Centennial Exhibition</i>, and for major solo exhibitions
              including{' '}
              <a
                href="https://harwoodmuseum.org/exhibition/debbie-long-light-ships/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>Debbie Long: Light-House</i>
              </a>{' '}
              and{' '}
              <a
                href="https://harwoodmuseum.org/exhibition/gus-foster-panoramic-photographs-of-northern-new-mexico/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>Gus Foster: Plaza, Peaks, and Plains</i>
              </a>
              .
              <span className="para-break" />
              Her writing has appeared in catalogues published by the Museum of New Mexico Press and the
              Harwood Museum of Art, and she has been covered by{' '}
              <a
                href="https://hyperallergic.com/debbie-long-turns-rvs-into-vessels-of-light/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hyperallergic
              </a>
              ,{' '}
              <a
                href="https://www.santafenewmexican.com/pasatiempo/art/harwood-at-a-hundred/article_e056d296-bc59-11ed-896e-b70bcf920f38.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Santa Fe New Mexican
              </a>
              , and{' '}
              <a
                href="https://www.taosnews.com/magazines/artes-tradiciones/fostering-the-land/article_456cf014-2554-11ec-817d-77e2c57a5f31.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Taos News
              </a>
              , among others. She holds an MA in Art History from the University of Colorado Boulder and a BA
              in Art History &amp; English from the University of Arizona.
              <span className="para-break" />
              e:{' '}
              <a href={`mailto:${contactDetails.email}`}>Nicole [at] gmail [dot] com</a>
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
