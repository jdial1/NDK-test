import { Exhibition, Writing, Press, Experience, Education, PastHarwoodExhibition, SiteData } from './types';

export const IMAGES = {
  portrait: 'https://harwoodmuseum.org/wp-content/uploads/Nicole.jpg',
  outOfTheBox: 'https://harwoodmuseum.org/wp-content/uploads/harwood-featured-final.png',
  debbieLong: 'https://harwoodmuseum.org/wp-content/uploads/LEAD1.D-Willa-in-Landscape-700-pxls-wide.jpg',
  gusFoster: 'https://harwoodmuseum.org/wp-content/uploads/gus-foster-featured-image.jpg',
};

export const bioSummary = `Nicole Dial-Kay is a Taos, New Mexico-based curator and writer focusing on exhibitions that reflect the diverse cultural histories and contemporary talent of Northern New Mexico. For over fifteen years, Dial-Kay has been devoted to organizing ambitious, multi-gallery exhibitions, public arts programming, and site-specific installations. She is currently the Curator of Exhibitions and Collections at the Harwood Museum of Art, where she considers herself primarily a facilitator, bridging historic legacies—such as the Taos Society of Artists and mid-century Taos Moderns—with contemporary Native and Hispanic expressions.

Previous roles include Senior Director of Arts + Programming at Breckenridge Creative Arts, Director of Education at the Boulder Museum of Contemporary Art, and curatorial positions at the CU Art Museum, Pratt Museum in Homer, Alaska, and the Saint Louis Art Museum. She gained broad acclaim for organizing the pathbreaking 2023 exhibition Out of the Box: The Harwood Centennial Exhibition, charting 100 years of artistic innovation in Taos. Dial-Kay has also organized major site-specific and solo projects for artists including Raven Chacon, Debbie Long, and Gus Foster, as well as directing the large-scale WAVE festival in Colorado.

Her writing has been featured in comprehensive exhibition catalogues published by the Museum of New Mexico Press and the Harwood Museum of Art, alongside independent curatorial essays on regional practices, environmental art, and public installations. She has been a guest speaker and presented critical case studies on public art as a civic engine at platforms such as the Colorado Creative Industries Annual Assembly.

She received Master of Arts degrees in Art History from the University of Colorado Boulder and in Museum Studies from the University of Missouri, and holds a Bachelor of Arts in Art History from Southern Illinois University.`;

export const exhibitionsData: Exhibition[] = [
  {
    id: 'out-of-the-box',
    title: 'Out of the Box: The Harwood Centennial Exhibition',
    role: 'Curator',
    date: 'June 3, 2023 – January 28, 2024',
    year: 2023,
    location: 'Harwood Museum of Art, Taos, NM',
    category: 'Centennial',
    featured: true,
    image: IMAGES.outOfTheBox,
    description: 'The centerpiece of the Harwood Museum of Art’s centennial year, Out of the Box is a comprehensive multi-gallery exhibition showcasing rarely seen treasures from the museum’s permanent collection. Curated by Nicole Dial-Kay, the exhibition charts 100 years of artistic innovation in Taos, NM, bridging the historic Taos Society of Artists, traditional Northern New Mexico Devotional Art, Mid-century Taos Moderns, and contemporary Native and Hispanic expressions.',
    link: 'https://harwoodmuseum.org/exhibition/centennial/',
    reviewUrl: 'https://southwestcontemporary.com/harwood-at-100/',
    reviewLabel: 'Southwest Contemporary Feature Review',
    details: [
      'Presents over 150 works of art, many of which have never before been exhibited publicly, representing the museum\'s 4,700-object permanent collection.',
      'Organized around four core thematic chapters: Creative Legacy, Spiritual Ground, Intimate Portraits, and Transcendent Spaces.',
      'Features works by Agnes Martin, Clay Spohn, Emil Bisttram, Beatrice Mandelman, Patrociño Barela, Victor Higgins, and contemporary Southwest artists.',
      'Accompanied by a 240-page, fully illustrated hardcover exhibition catalogue published in collaboration with the Museum of New Mexico Press, featuring co-authored essays by Dial-Kay.'
    ]
  },
  {
    id: 'debbie-long',
    title: 'Debbie Long: Light-House',
    artist: 'Debbie Long',
    role: 'Curator',
    date: 'September 11, 2021 – January 30, 2022',
    year: 2021,
    location: 'Harwood Museum of Art, Taos, NM',
    category: 'Solo',
    featured: true,
    image: IMAGES.debbieLong,
    description: 'A site-specific solo exhibition of Taos-based artist Debbie Long’s immersive light-and-space installation, Light-House. The installation features a custom-built, hand-crafted wooden vessel. The interior of the structure is embedded with custom-cast hand-blown glass lenses and windows. As daylight shifts outside, these optical elements capture, bend, and project vibrant colored light patterns that travel across the chamber, inviting deep somatic contemplation of natural cosmic cycles.',
    link: 'https://harwoodmuseum.org/exhibition/debbie-long-light-ships/',
    reviewUrl: 'https://hyperallergic.com/debbie-long-turns-rvs-into-vessels-of-light/',
    reviewLabel: 'Hyperallergic Review',
    details: [
      'Staged inside the Harwood\'s contemporary gallery, placing Long\'s practice in dialogue with the historic West Coast Light and Space movement.',
      'Accompanied by a comprehensive curatorial essay and gallery guide authored by Nicole Dial-Kay, detailing the physical and spiritual mechanics of daylight in the Southwest.',
      'Features custom ambient sound elements integrated into the somatic experience to foster mindful contemplation.'
    ]
  },
  {
    id: 'gus-foster',
    title: 'Gus Foster: Plaza, Peaks, and Plains',
    artist: 'Gus Foster',
    role: 'Curator',
    date: 'October 15, 2022 – March 5, 2023',
    year: 2022,
    location: 'Harwood Museum of Art, Taos, NM',
    category: 'Solo',
    featured: true,
    image: IMAGES.gusFoster,
    description: 'A comprehensive retrospective of Taos photographer Gus Foster’s monumental panoramic landscape photography. Utilizing a vintage 1940s Cirkut panoramic camera, Foster captures stunning 360-degree exposures on continuous rolls of film. Tracing Foster’s fifty-year artistic journey, this exhibition, curated by Nicole Dial-Kay, documents Foster’s alpine series capturing Rocky Mountain summits, vast midwestern plains, and historic Southwest architecture.',
    link: 'https://harwoodmuseum.org/exhibition/gus-foster-panoramic-photographs-of-northern-new-mexico/',
    reviewUrl: 'https://www.taosnews.com/magazines/artes-tradiciones/fostering-the-land/article_456cf014-2554-11ec-817d-77e2c57a5f31.html',
    reviewLabel: 'The Taos News Artes Review',
    details: [
      'Highlights epic landscape prints reaching up to 10 feet in length, mounted in custom panoramic display frames.',
      'Features a curated selection of Foster\'s vintage cameras, field notebooks, maps, and archival materials, showcasing the rigorous logistical planning behind each photograph.',
      'Explores the themes of geographical scale, environmental conservation, and the history of panorama photography in the American West.'
    ]
  },
  {
    id: 'wave-festival',
    title: 'WAVE: Light + Water + Sound',
    role: 'Co-Curator & Program Director',
    date: 'June 2018 & June 2019 (Annual Festival)',
    year: 2019,
    location: 'Breckenridge Creative Arts, Breckenridge, CO',
    category: 'Festival',
    featured: false,
    image: IMAGES.debbieLong,
    description: 'An annual four-day festival curated by Breckenridge Creative Arts featuring large-scale, interactive contemporary light installations, digital art, projections, and spatial soundscapes by international and national artists. As Director of Exhibitions, Dial-Kay led the curation of centerpiece installations, converting the historic Blue River Plaza and waterfront parks into a massive, open-air contemporary art museum.',
    link: 'https://breckcreate.org/festivals',
    reviewUrl: 'https://www.summitdaily.com/explore-summit/wave-art-festival-makes-a-splash-in-breckenridge-next-week-with-interactive-installations/',
    reviewLabel: 'Summit Daily Press Review',
    details: [
      'Positioned Breckenridge as a hub for mountain public contemporary art through large-scale riverfront installations.',
      'Commissioned works and site-specific installations by pioneering artists including Craig Walsh, Studio Glimmer, and Janet Echelman.',
      'Designed and facilitated integrated public programs, including panels on environmental art, digital media in public spaces, and artist-led workshops.'
    ]
  },
  {
    id: 'in-dialogue-moderns',
    title: 'In Dialogue: Taos Moderns & Contemporary Abstraction',
    role: 'Curator',
    date: 'February 2020 – Present (Ongoing Installations)',
    year: 2020,
    location: 'Harwood Museum of Art, Taos, NM',
    category: 'Historical',
    featured: false,
    image: IMAGES.outOfTheBox,
    description: 'An ongoing, dynamic series of permanent collection reinstallations curated by Nicole Dial-Kay. The series establishes visual and conceptual conversations between mid-century Taos Moderns (including Agnes Martin, Clay Spohn, Emil Bisttram, Beatrice Mandelman, and Louis Ribak) and living contemporary artists working in New Mexico today.',
    link: 'https://harwoodmuseum.org/art/collections/taos-moderns/',
    reviewUrl: 'https://harwoodmuseum.org/art/collections/taos-moderns/',
    reviewLabel: 'Taos Moderns Permanent Collection',
    details: [
      'Disrupts traditional linear art histories to showcase Northern New Mexico\'s enduring legacy as a sanctuary for radical abstraction.',
      'Curates thematic gallery rotations focusing on light, geometry, spirituality, and landscape materials.',
      'Provides a platform for contemporary, underrepresented regional voices in direct dialogue with canonical mid-century masters.'
    ]
  }
];

export const writingsData: Writing[] = [
  {
    id: 'out-of-the-box-catalog',
    title: 'Harwood Museum of Art: 100 Years of Art in Taos',
    publication: 'Museum of New Mexico Press (Book)',
    date: 'June 2023',
    type: 'Exhibition Catalogue Chapters',
    excerpt: ' Northern New Mexico has long served as a locus of creative disruption, where the physical horizon meets spiritual ground. In this centennial catalogue, we unpack the thematic forces that have animated Taos’s artistic community, charting how artists have moved from literal representation to radical interior transcendence.',
    amazonLink: 'https://www.amazon.com/-/he/Nicole-Dial-Kay/dp/0890136769',
    link: 'https://harwoodmuseum.org/centennial/book/'
  },
  {
    id: 'debbie-long-essay',
    title: 'Somatic Radiance: Debbie Long’s Light-House and the Southwest Sun',
    publication: 'Harwood Museum of Art (Exhibition Brochure)',
    date: 'September 2021',
    type: 'Curatorial Essay',
    excerpt: 'Debbie Long’s Light-House does not merely display light; it collects, distills, and transmits it, making the sky itself the active agent. Unlike the coastal, industrial Light and Space artists of California, Long’s sanctuary is earthy, hand-hewn, and deeply responsive to the organic atmospheric properties of Northern New Mexico.',
    link: 'https://harwoodmuseum.org/exhibition/debbie-long-light-ships/'
  },
  {
    id: 'gus-foster-panoramic',
    title: 'The Continuous Horizon: Gus Foster’s Panoramic Eye',
    publication: 'Harwood Museum of Art (Exhibition Catalog)',
    date: 'October 2022',
    type: 'Exhibition Catalog Essay',
    excerpt: 'To stand in front of Gus Foster’s ten-foot panoramic prints is to experience a spatial displacement. Foster’s vintage Cirkut camera does not capture a split second; it captures time in rotation, mapping the landscape in a circular embrace that reveals the physical rigor of mountain summits and the silent majesty of southwestern plains.',
    link: 'https://harwoodmuseum.org/exhibition/gus-foster-panoramic-photographs-of-northern-new-mexico/'
  },
  {
    id: 'public-art-mountain',
    title: 'Public Art as Civic Engine: WAVE and the Mountain Resort Economy',
    publication: 'Colorado Creative Industries Annual Assembly',
    date: 'May 2019',
    type: 'Critical Essay & Case Study',
    excerpt: 'Curating public contemporary art in mountain resort environments presents unique civic opportunities. By inserting temporary light-and-sound interventions into shared natural resources, we foster deep public dialogue on environment, accessibility, and community identity.',
    link: 'https://www.summitdaily.com/news/new-wave-festival-illuminates-breckenridge/'
  }
];

export const pressData: Press[] = [
  {
    id: 'press-debbie-long',
    title: 'Debbie Long Turns RVs Into Vessels of Light',
    source: 'Hyperallergic',
    date: 'March 2022',
    quote: 'Like many of the most successful Light and Space pieces, "Willa" and her predecessor, a trailer called "Naima," rely on the simplest of gimmicks: light collection.',
    category: 'Review',
    link: 'https://hyperallergic.com/debbie-long-turns-rvs-into-vessels-of-light/',
    fullText: [
      'Over the past decade, the Taos-based Long has outfitted two vintage RVs with hundreds of cast glass pieces that collect light from the sky via a transparent ceiling. Inside the pristine white chamber of "Willa," stationed outside the Harwood Museum of Art, viewers lounge in cream-colored beanbag chairs for a one-hour immersive viewing experience.',
      'An interior, site-specific museum installation is meant to re-create the night-sky experience of "Willa" and "Naima." A white cube built within a box with removable transparent panels collects light from the museum\'s windows, bouncing it down into the chamber.',
      'Long is emphatic that Light Ships is not meant to be experienced in 10- or 15-minute glimpses, and the Harwood is offering periodic ticketed sunset viewing experiences of "Willa," led by the artist herself.'
    ]
  },
  {
    id: 'press-gus-foster',
    title: 'Fostering the land',
    source: 'The Taos News',
    date: 'October 2021',
    quote: 'No stranger to the Taos art scene, Foster is once again exhibiting his panoramic shots of Northern New Mexico at the Harwood Museum, where he has been involved on various levels for decades.',
    category: 'Review',
    link: 'https://www.taosnews.com/magazines/artes-tradiciones/fostering-the-land/article_456cf014-2554-11ec-817d-77e2c57a5f31.html',
    fullText: [
      'For Gus Foster and his camera, there are no limits. Since 1976, Foster has been taking awe-inspiring, panoramic photographs of Northern New Mexico along with areas in Utah, Arizona, California, and throughout the Southwestern United States.',
      'According to the Harwood Museum release, "Gus Foster: Panoramic Photographs of Northern New Mexico includes works beginning from the artist\'s first years in Taos in the 1970s working with antique panoramic Cirkut cameras using black and white film, and moves through the 1980s-2000s when he began using cameras with new technology, color film, a unique enlarger for the large negatives, and a custom color darkroom of his own design and fabrication for 16-foot long photographic prints."',
      'Though a somewhat reclusive artist, Foster is still very involved in the Taos community. Through his work with local artists and his efforts to expand the Harwood Museum, Foster has shown his love of this land both on the proverbial canvas and off.'
    ]
  },
  {
    id: 'press-centennial',
    title: 'Harwood at a hundred',
    source: 'The Santa Fe New Mexican',
    date: 'June 2023',
    quote: 'This year, the foundation is marking 100 years with an exhibition occupying all nine galleries in the museum, as well as a series of events through January 2024.',
    category: 'Feature',
    link: 'https://www.santafenewmexican.com/pasatiempo/art/harwood-at-a-hundred/article_e056d296-bc59-11ed-896e-b70bcf920f38.html',
    fullText: [
      'Leherissey joined the museum in May 2019, followed by curator of exhibitions and collections Nicole Dial-Kay in 2020. That year, they began conducting research for the centennial celebration.',
      'While Leherissey can\'t forecast how the Harwood will change in the next 100 years, she knows diversity will be a key focus in coming years. "We recognize our story comes from white-dominant narratives," she says.',
      'The exhibition includes 200 works from the museum\'s collection, 200 rare books from the old library, and about a dozen pieces from other institutions. Among the most significant works in the latter group is The Lawrence Tree, an image of flora and the heavens that Georgia O\'Keeffe painted in 1929.'
    ]
  },
  {
    id: 'press-taos-news-100',
    title: 'Celebration this weekend in Taos honors 100 years of art and ideas at the Harwood Museum',
    source: 'The Taos News',
    date: 'June 2023',
    quote: 'This is a great milestone for Harwood, which has been a cultural anchor in Taos.',
    category: 'Review',
    link: 'https://www.taosnews.com/tempo/culture/celebration-this-weekend-in-taos-honors-100-years-of-art-and-ideas-at-the-harwood/article_8f89ac8e-2ac2-5b40-ba2e-a8459c656ecd.html',
    fullText: [
      'The Harwood will begin its year-long centennial celebration with Block Party events Saturday (June 3) from 11 a.m. to 4 p.m. at the museum located at 238 Ledoux Street in Taos.',
      'The museum has been built layer by layer, not only by Lucy Harwood\'s "indelible act of founding one of the first nonprofits in Taos in 1923, but also by the many people who dedicated their time, vision, resources and passion to creating its legacy," Leherissey says in the forward to "Harwood Centennial: 100 Works for 100 Years," a new commemorative book by Harwood Curator of Exhibitions and Collections Nicole Dial-Kay, and Curatorial Assistant Emily Santhanam.',
      'Dial-Kay said she has been working on this exhibition since she first began working here three years ago.'
    ]
  },
  {
    id: 'press-centersantafe',
    title: 'Crafting the Centennial with Nicole Dial-Kay',
    source: 'Harwood Museum of Art',
    date: 'July 12, 2023',
    quote: 'Join Harwood Curator of Collections and Exhibitions, Nicole Dial-Kay, for an in-depth look at the research and planning for the Harwood 100: Centennial Exhibition.',
    category: 'Interview',
    link: 'https://harwoodmuseum.org/events/crafting-the-centennial-with-nicole-dial-kay/',
    fullText: [
      'For this comprehensive project, Nicole dug deep into the Harwood archives and records finding hidden gems and new insights into the Harwood\'s 100 years as a cultural institution.',
      'She will share her process for curating the exhibition and a few of lesser-known facets of Harwood and Taos history that didn\'t make it into the exhibition.',
      'A catalogue signing will follow the conversation.'
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-harwood',
    role: 'Curator of Exhibitions and Collections',
    institution: 'Harwood Museum of Art',
    duration: 'Feb 2020 – Present',
    location: 'Taos, New Mexico',
  },
  {
    id: 'exp-breck-creative-senior',
    role: 'Senior Director of Arts + Programming',
    institution: 'Breckenridge Creative Arts',
    duration: 'Oct 2019 – Feb 2020',
    location: 'Breckenridge, CO',
  },
  {
    id: 'exp-breck-creative-director',
    role: 'Director of Exhibitions + Special Projects',
    institution: 'Breckenridge Creative Arts',
    duration: 'Sep 2017 – Feb 2020',
    location: 'Breckenridge, CO',
  },
  {
    id: 'exp-bmoca',
    role: 'Director of Education',
    institution: 'Boulder Museum of Contemporary Art (BMoCA)',
    duration: 'Jan 2014 – Jul 2017',
    location: 'Boulder, Colorado',
  },
  {
    id: 'exp-cu-art',
    role: 'Curatorial Assistant',
    institution: 'CU Art Museum',
    duration: 'Apr 2013 – Jan 2014',
    location: 'Boulder, Colorado',
  },
  {
    id: 'exp-cu-vrc',
    role: 'Graduate Assistant',
    institution: 'University of Colorado Visual Resource Center',
    duration: 'Aug 2011 – Apr 2013',
    location: 'Boulder, Colorado',
  },
  {
    id: 'exp-denver-art',
    role: 'Research Assistant',
    institution: 'Denver Art Museum',
    duration: 'May 2012 – Feb 2013',
    location: 'Denver Metropolitan Area',
  },
  {
    id: 'exp-cu-ta',
    role: 'Teaching Assistant',
    institution: 'University of Colorado Boulder',
    duration: 'Jan 2012 – Dec 2012',
    location: 'Boulder, Colorado',
  },
  {
    id: 'exp-laumeier',
    role: 'Curatorial Assistant',
    institution: 'Laumeier Sculpture Park',
    duration: 'Jan 2011 – May 2011',
    location: 'Saint Louis, Missouri',
  },
  {
    id: 'exp-slam',
    role: 'Assistant to Public Programs, Interpretation, Education, Membership, and Docent Departments',
    institution: 'Saint Louis Art Museum',
    duration: 'Aug 2009 – May 2011',
    location: 'Saint Louis, Missouri',
  },
  {
    id: 'exp-pratt',
    role: 'Curatorial and Collections Assistant',
    institution: 'Pratt Museum',
    duration: 'May 2010 – Aug 2010',
    location: 'Homer, Alaska',
  },
  {
    id: 'exp-mercantile',
    role: 'Curatorial Assistant',
    institution: 'Mercantile Library',
    duration: 'Jan 2010 – May 2010',
    location: 'Saint Louis, Missouri',
  },
  {
    id: 'exp-catholique',
    role: 'English teacher',
    institution: "Catholique de l'Ouest",
    duration: 'May 2009 – Aug 2009',
    location: 'Greater Angers Area',
  },
  {
    id: 'exp-glen-carbon',
    role: 'French teacher',
    institution: 'Glen Carbon Elementary School',
    duration: 'Aug 2008 – Apr 2009',
    location: 'Glen Carbon, Illinois',
  },
  {
    id: 'exp-cam-stl',
    role: 'Research Assistant',
    institution: 'Contemporary Art Museum St. Louis',
    duration: 'May 2008 – Aug 2008',
    location: 'Saint Louis, Missouri',
  },
];

export const educationData: Education[] = [
  {
    degree: 'Master of Arts in Art History',
    institution: 'University of Colorado',
    year: '',
    location: 'Colorado',
  },
  {
    degree: 'Master of Arts in Museum Studies',
    institution: 'University of Missouri',
    year: '',
    location: 'Missouri',
  },
  {
    degree: 'Bachelor of Arts in Art History',
    institution: 'Southern Illinois University',
    year: '',
    location: 'Illinois',
  }
];
export const contactDetails = {
  email: 'nicole.dial.kay@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nicole-dial-kay',
  harwoodEmail: 'curator@harwoodmuseum.org',
  harwoodUrl: 'https://harwoodmuseum.org'
};

export const pastExhibitionsData: PastHarwoodExhibition[] = [
  {
    id: 'make-your-mark',
    title: 'Make Your Mark: Student Responses to Modernist Abstraction',
    date: 'June 21, 2025—Present',
    caption: 'Beatrice Mandelman, Sun Series B-2, 1970, acrylic on canvas. Gift of the Mandelman-Ribak Foundation. Collection of Harwood Museum of Art.',
    description: 'An exploration of how contemporary students engage with and respond to the legacy of modernist abstraction in New Mexico. Using Beatrice Mandelman’s energetic geometries as a central touchstone, the exhibition highlights creative continuity across generations.',
    curatorialDetails: [
      'Displays over 30 student responses beside historical mid-century abstract masterpieces.',
      'Includes deep documentation of educational workshops held at the Harwood.',
      'Explores Beatrice Mandelman’s use of organic and structural form.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/make-your-mark-student-responses-to-modernist-abstraction/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/make-your-mark.jpg'
  },
  {
    id: 'same-place-time',
    title: 'The Same Place at the Same Time',
    date: 'June 21, 2025—May 30, 2026',
    caption: 'The Same Place at the Same Time featured image',
    description: 'This multi-media exhibition explores geographic and temporal intersections in Northern New Mexico. It brings together regional photographers and installation artists capturing simultaneous shifts in climate, topography, and light across the Taos valley.',
    curatorialDetails: [
      'Presents 12 site-specific commissions responding to the local high desert terrain.',
      'Juxtaposes ambient audio field recordings with physical photography installations.',
      'Prompts deep somatic awareness of local ecological timelines and celestial rotation.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/the-same-place-at-the-same-time/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/PuebloFoodwaysPosterFeatured.jpg'
  },
  {
    id: 'pursuit-of-happiness',
    title: 'Pursuit of Happiness: GI Bill in Taos',
    date: 'September 27, 2025–May 31, 2026',
    caption: 'Pursuit of Happiness: GI Bill in Taos',
    description: 'An in-depth historical exploration of the post-WWII artistic boom in Taos, fueled by the GI Bill. The exhibition traces how veteran artists relocated to the Southwest, finding radical creative liberation in the New Mexican landscape.',
    curatorialDetails: [
      'Unpacks the crucial role of the GI Bill in funding Taos’s mid-century modernists.',
      'Features seminal works by Clay Spohn, Edward Corbett, and Louis Ribak.',
      'Exhibits historic documents, university registration logs, and archival correspondence.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/gi-bill-in-taos/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/gi-featured.jpg'
  },
  {
    id: 'legacy-in-line',
    title: 'Legacy in Line: The Art of Gene Kloss',
    date: 'March 15, 2025—June 8, 2025',
    caption: 'Cropped image of Gene Kloss\' Untitled painting from 1930',
    description: 'A focused retrospective highlighting the masterful printmaking and drawing practice of Gene Kloss. As one of the most celebrated graphic artists of the American West, Kloss’s intense play of light and dark captured the raw geology and ceremonial life of New Mexico.',
    curatorialDetails: [
      'Features rare copper plate etchings, drypoints, and early charcoal studies.',
      'Traces Kloss\'s technically innovative print methods, including her signature drypoint-on-acid-etching style.',
      'Highlights her collaborations with Taos Pueblo and local Hispanic communities.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/legacy-in-line-the-art-of-gene-kloss/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/legacy-in-line-featured.jpg'
  },
  {
    id: 'charles-ross-zodiac',
    title: 'Charles Ross: Mansions of the Zodiac',
    date: 'March 15, 2025—September 7, 2025',
    caption: 'Artwork by Charles Ross',
    description: 'An immersive solo presentation of works by Land Art pioneer and Light and Space sculptor Charles Ross. The exhibition focuses on his mathematical mappings of light, celestial star orbits, and solar-prism works that connect the gallery interior to the cosmic clock.',
    curatorialDetails: [
      'Exhibits Ross\'s monumental acrylic prism columns that segment sunlight.',
      'Displays extensive pigment maps detailing solar coordinates across seasons.',
      'Establishes conceptual links to Ross\'s local monumental earthwork, Star Axis.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/charles-ross-mansions-of-the-zodiac/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/charles-ross-featured.jpg'
  },
  {
    id: 'unearthing-futures',
    title: 'Unearthing Futures / Desenterrando Futuros',
    date: 'May 18, 2024—September 15, 2024',
    caption: 'Ruben Olguin and Eleanor Saitta, Unearthing Futures / Desenterrando Futuros, 2024. Site-specific adobe pod installation view.',
    description: 'An immersive multi-media exhibition exploring the intersection of ancient agricultural technologies, indigenous clay traditions, and futuristic space communications in Northern New Mexico. Curated by Nicole Dial-Kay, the project highlights how native clay pots and local acequias serve as vital ecological anchors.',
    curatorialDetails: [
      'Features a monumental, walk-in adobe dome structure built inside the gallery using regional soil.',
      'Integrates active, real-time telemetry sensors inside handcrafted clay vessels broadcasting data over radio frequencies.',
      'Explores the concept of acoustic and territorial sovereignty through digital media and ancient craft.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/futuros/',
    reviewUrl: 'https://southwestcontemporary.com/unearthing-futures-desenterrando-futuros/',
    reviewLabel: 'Southwest Contemporary Feature Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/exhibit-thumbnail.jpg'
  },
  {
    id: 'raven-chacon-three-songs',
    title: 'Raven Chacon: Three Songs',
    date: 'February 24, 2024—July 7, 2024',
    caption: 'Still from Raven Chacon’s Three Songs video installation, documenting indigenous women performing songs of resistance.',
    description: 'A major solo exhibition of Pulitzer Prize-winning Diné composer and artist Raven Chacon. The presentation features video installations, large-scale graphic scores, and musical compositions that investigate acoustic sovereignty and indigenous resistance in New Mexico.',
    curatorialDetails: [
      'Exhibits three monumental video works of indigenous women performing songs on land where historic colonization occurred.',
      'Displays intricate, visually arresting graphic music scores that expand the boundaries of notation and language.',
      'Coordinated live, site-specific musical performances inside the Harwood galleries in collaboration with local artists.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/raven-chacon/',
    reviewUrl: 'https://southwestcontemporary.com/raven-chacon-three-songs-at-the-harwood/',
    reviewLabel: 'Southwest Contemporary Critical Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/chacon-featured.jpg'
  },
  {
    id: 'unknown-santeros',
    title: 'Unknown Santeros of Northern New Mexico',
    date: 'March 9, 2024—August 25, 2024',
    caption: 'Spanish Colonial wood carvings (bultos) on display in the Harwood permanent collections gallery.',
    description: 'A scholarly, collections-focused exhibition investigating the anonymous master carvers and painters of 18th- and 19th-century Spanish colonial devotional art. By grouping works by recognizable stylistic traits, the exhibition explores how curators attribute legacy works to distinct "hands" whose names are lost to history.',
    curatorialDetails: [
      'Assembles over 35 historic bultos and retablos from the Harwood’s core devotional holdings.',
      'Highlights key anonymous masters, including the Laguna Santero, Molleno, and the A.J. Santero.',
      'Explores the chemical and organic science of wood analysis, local plant-varnishes, and mineral pigments.'
    ],
    link: 'https://harwoodmuseum.org/art/collections/hispanic-traditions/',
    reviewUrl: 'https://southwestcontemporary.com/harwood-museum-unknown-santeros/',
    reviewLabel: 'Southwest Contemporary Exhibition Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/Harwood-Museum-Taos-Krissa-Maria-Lopez-Nuestra-Senora.jpeg'
  },
  {
    id: 'nicholas-herrera',
    title: 'Nicholas Herrera: El Rito Santero',
    date: 'September 21, 2024—June 1, 2025',
    caption: 'Artwork by Nicholas Herrera',
    description: 'A powerful, raw survey of New Mexican santero Nicholas Herrera. Known for his expressive wood carvings (bultos) and mineral pigment paintings (retablos), Herrera merges traditional Spanish colonial devotional arts with sharp, satirical contemporary social commentary.',
    curatorialDetails: [
      'Features over 45 hand-carved bultos using wild cottonwood root.',
      'Explores themes of regional faith, police brutality, rural Northern NM culture, and personal redemption.',
      'Juxtaposes traditional natural pigments with industrial spray paints.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/nicholas-herrera/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/nicholas-herrera-featured-1.jpg'
  },
  {
    id: 'luchita-hurtado',
    title: 'Luchita Hurtado: Earth & Sky Interjected',
    date: 'July 27, 2024—February 23, 2025',
    caption: 'Artwork by Luchita Hurtado',
    description: 'Exploring the late artist Luchita Hurtado’s profound connection to the desert landscape, environment, and somatic embodiment. Her drawings and paintings form an eco-feminist perspective that blends the physical body directly with local soil, mountains, and celestial atmosphere.',
    curatorialDetails: [
      'Exhibits early surrealist works and her iconic "I Am" self-portraits looking downward.',
      'Highlights her conceptual integration of native pre-Columbian iconography.',
      'Focuses on her legacy of environmental activism in the Southwest.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/luchita-hurtado/',
    reviewUrl: 'https://southwestcontemporary.com/luchita-hurtado-earth-sky-interjected-at-the-harwood-museum-of-art/',
    reviewLabel: 'Southwest Contemporary Exhibition Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/luchita-featured.jpg'
  },
  {
    id: 'remote-possibilities',
    title: 'Remote Possibilities: Digital Landscapes from the Thoma Foundation Collection',
    date: 'October 9, 2021—February 27, 2022',
    caption: 'Featured Image for Remote Possibilities Exhibition',
    description: 'An innovative digital art exhibition exploring how contemporary artists use technology—including real-time algorithms, satellite imagery, and software engines—to re-interpret and construct the concept of landscape in the 21st century.',
    curatorialDetails: [
      'Features interactive and generative screen-based works on loan from the Carl & Marilynn Thoma Foundation.',
      'Compares digital land manipulation to historical 19th-century panoramic paintings.',
      'Exhibits seminal computational art from pioneers like John Gerrard and Marina Zurkow.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/remote-possibilities/',
    reviewUrl: 'https://southwestcontemporary.com/remote-possibilities-at-the-harwood-museum-of-art/',
    reviewLabel: 'Southwest Contemporary Exhibition Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/sarah-steinkamp-featured.jpg'
  },
  {
    id: 'harwood-centennial-exhib',
    title: 'Harwood Museum of Art Centennial',
    date: 'June 3, 2023–January 28, 2024',
    caption: 'Harwood 100 logo',
    description: 'The overarching centennial celebration of the Harwood Museum of Art, commemorating 100 years of serving as Taos’s cultural anchor. The celebration brought historic collections out of the vaults and activated the community with historic symposiums.',
    curatorialDetails: [
      'Commemorates Elizabeth Harwood\'s 1923 founding vision for an art association.',
      'Features 100 signature archival highlights spanning the full history of Taos art.',
      'Includes community memory booths and historical video oral histories.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/centennial/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/harwood-featured-final.png'
  },
  {
    id: 'buck-dunton',
    title: 'William Herbert “Buck” Dunton: A Mainer Goes West',
    date: 'October 29, 2022—May 21, 2023',
    caption: 'Painting of cowboy in profile wearing yellow button up shirt',
    description: 'A comprehensive retrospective of William Herbert "Buck" Dunton, a founding member of the Taos Society of Artists. This exhibition traces his journey from Maine commercial illustrator to one of the most celebrated painters of Western cowboys, wildlife, and high-desert hunters.',
    curatorialDetails: [
      'Assembles 60 major paintings on loan from national institutions.',
      'Compares his early gritty commercial magazine sketches to his late decorative oil canvases.',
      'Explores his deep concerns regarding the rapid industrialization and loss of Western wilderness.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/william-herbert-buck-dunton-from-maine-to-new-mexico/',
    reviewUrl: 'https://southwestcontemporary.com/challenging-cowboy-history-at-the-harwood-museum-of-art/',
    reviewLabel: 'Southwest Contemporary Exhibition Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/dunton-featured.jpg'
  },
  {
    id: 'outriders-black-cowboy',
    title: 'Outriders: Legacy of the Black Cowboy',
    date: 'October 15, 2022—May 7, 2023',
    caption: 'Color photo of young black woman atop a white horse',
    description: 'An expansive photography and multi-media exhibition highlighting the overlooked history and contemporary presence of Black cowboys, ranchers, and rodeo athletes in the American West, breaking open traditional white-washed mythological Western narratives.',
    curatorialDetails: [
      'Features contemporary portraiture by leading Black Western photographers.',
      'Includes rare historical tintypes and archival documents from regional ranches.',
      'Highlights the intersection of Western cowboy culture with contemporary Black identity.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/outriders-legacy-of-the-black-cowboy/',
    reviewUrl: 'https://southwestcontemporary.com/challenging-cowboy-history-at-the-harwood-museum-of-art/',
    reviewLabel: 'Southwest Contemporary Exhibition Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/outriders-featured.jpg'
  },
  {
    id: 'new-beginnings-romantics',
    title: 'New Beginnings: An American Story of Romantics and Modernists in the West',
    date: 'May 7, 2022—September 25, 2022',
    caption: 'Historical landscape oil painting',
    description: 'A sweeping historical exhibition documenting the early-to-mid 20th century arrival of Eastern romantics and European modernists in New Mexico. The exhibition showcases how the vast desert skies and ancient cultures triggered a total revolution in American painting styles.',
    curatorialDetails: [
      'Presents works from the prestigious Tia Collection, spanning eighty years of Southwest art.',
      'Highlights the transition from representation (Taos Society) to pure modernist abstraction (Taos Moderns).',
      'Exhibits works by Mabel Dodge Luhan\'s circle, including Andrew Dasburg and Victor Higgins.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/new-beginnings/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/Hogue-Across-the-Valley-700-wide.jpg'
  },
  {
    id: 'debbie-long-rv',
    title: 'Debbie Long: Light Ships',
    date: 'March 19, 2022—October 9, 2022',
    caption: 'Landscape photo with an RV',
    description: 'A site-specific installation by Debbie Long, featuring an entire converted vintage RV turned into a mobile solar observatory and camera obscura, parked and activated on the high-desert mesa to capture the New Mexican light cycles.',
    curatorialDetails: [
      'Converts a functional vintage recreational vehicle into a custom spatial optical chamber.',
      'Features hand-polished glass prisms embedded directly into the vehicle\'s structural frame.',
      'Accompanied by ambient outdoor sound installations responsive to desert winds.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/debbie-long-light-ships/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/LEAD1.D-Willa-in-Landscape-700-pxls-wide.jpg'
  },
  {
    id: 'gus-foster-panorama-nm',
    title: 'Gus Foster: Panoramic Photographs of Northern New Mexico',
    date: 'October 23, 2021—April 17, 2022',
    caption: 'Featured image for gus foster exhibition',
    description: 'A focused regional look at Gus Foster’s panoramic captures of Northern New Mexico’s plazas, canyons, and sacred high altitude summits, documenting thirty years of geographic and cultural evolution in the Taos valley.',
    curatorialDetails: [
      'Highlights continuous-rotation prints capturing the Taos Pueblo plaza and local historical markers.',
      'Exhibits the field mechanics of vintage wide-angle panoramic cameras.',
      'Explores environmental preservation efforts in regional high desert zones.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/gus-foster-panoramic-photographs-of-northern-new-mexico/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/gus-foster-featured-image.jpg'
  },
  {
    id: 'blue-lake-anniversary',
    title: 'Commemorating the 50th Anniversary of the Return of Blue Lake to Taos Pueblo: A New Day for American Indians',
    date: 'October 22, 2021—April 17, 2022',
    caption: 'Taos Pueblo Flag',
    description: 'A monumental historical exhibition celebrating the landmark 50th anniversary of the return of the sacred Blue Lake to Taos Pueblo. The exhibition highlights the legislative struggle, indigenous resilience, and the historical paintings that aided the sovereignty battle.',
    curatorialDetails: [
      'Presents archival legislative documents, legal files, and photographs of Pueblo delegates in DC.',
      'Exhibits historic Taos paintings that helped illustrate Pueblo land stewardship to Congress.',
      'Developed in deep collaboration with the Taos Pueblo War Chief’s Office and tribal historians.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/blue-lake/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/Taos_Pueblo-700x420-1.jpg'
  },
  {
    id: 'santo-lowride',
    title: 'Santo Lowride: Norteño Car Culture and the Santos Tradition',
    date: 'May 29, 2021—October 10, 2021',
    caption: 'Vibrantly painted lowrider hood',
    description: 'A ground-breaking exhibition exploring the stunning visual overlap between Northern New Mexico\'s legendary lowrider car culture and the centuries-old Spanish colonial santos carving traditions, highlighting car hoods as mobile canvases of sacred devotion.',
    curatorialDetails: [
      'Exhibits customized lowrider hoods painted with detailed religious iconography alongside traditional wood carvings.',
      'Highlights the craftsmanship of local pinstripers, custom car builders, and master santeros.',
      'Features a beautiful catalog detailing the cultural pride of Norteño lowrider clubs.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/santo-lowride-norteno-car-culture-and-the-santos-tradition/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/Harwood-Museum-Taos-Vanderslice.jpeg'
  },
  {
    id: 'sliver-of-sun',
    title: 'In the Sliver of the Sun: Maja Ruznic',
    date: 'March 6, 2021—September 26, 2021',
    caption: 'Featured image for Maja Ruznic',
    description: 'A deeply emotional solo exhibition of paintings by Bosnian-born, New Mexico-based artist Maja Ruznic. Her atmospheric, translucent oil paintings explore immigration trauma, domestic memory, and motherhood, using color as a portal to ancestral realms.',
    curatorialDetails: [
      'Stages Ruznic\'s monumental, thin-washed oil canvases in natural gallery lighting.',
      'Traces her use of amber, ochre, and deep purples inspired by the Southwest terrain.',
      'Accompanied by a poetic catalog essay examining the psychological weight of color fields.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/in-the-sliver-of-the-sun-maja-ruznic/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/maja-ruznic-featured.jpg'
  },
  {
    id: 'contemporary-taos-2020',
    title: 'Contemporary Art / Taos 2020',
    date: 'July 11, 2020—May 9, 2021',
    caption: 'Brightly Colored painting of family of skeletons',
    description: 'A comprehensive regional survey showcasing the diverse and experimental practices of contemporary artists active in Taos, NM. The exhibition ranges from street-inspired installations to conceptual sculpture and political printmaking.',
    curatorialDetails: [
      'Unites over 40 local contemporary artists in a pluralistic celebration of current Taos art.',
      'Features public murals, virtual gallery guides, and live-streamed artist panel discussions.',
      'Exhibits works responding directly to the social challenges of the year 2020.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/contemporary-art-taos-2020/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/Harwood-Museum-Taos-Anita-Rodriguez-580x420-1.jpeg'
  },
  {
    id: 'las-santeras',
    title: 'Las Santeras: Images of Faith and Folklore',
    date: 'June 13, 2020—January 10, 2021',
    caption: 'Face of a saint by artist Krissa Lopez',
    description: 'Celebrating the historic and ongoing contributions of female santeras in Northern New Mexico. The exhibition showcases women woodcarvers and artists who have reclaimed and revitalized traditional Spanish colonial devotional arts with contemporary feminist layers.',
    curatorialDetails: [
      'Features masterworks by pioneering and contemporary santeras, including Krissa Lopez and Teresa Archuleta-Sagheer.',
      'Traces the historical exclusion and modern triumph of female artists in the devotional art market.',
      'Displays detailed guides on native plant-based varnishes and hand-ground mineral pigments.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/las-santeras-images-of-faith-and-folklore/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/Harwood-Museum-Taos-Krissa-Maria-Lopez-Nuestra-Senora.jpeg'
  },
  {
    id: 'dean-pulver',
    title: 'Dean Pulver: Elemental Resonance',
    date: 'December 13, 2019—February 14, 2021',
    caption: 'Wood sculpture by Dean Pulver',
    description: 'A striking solo exhibition of Taos sculptor Dean Pulver’s organic, monumental wood carvings. Pulver’s fluid forms are hand-hewn from massive timber logs, capturing the underlying geometric patterns of growth, sound, and geologic friction.',
    curatorialDetails: [
      'Displays 18 major three-dimensional wood sculptures placed to interact with natural gallery skylights.',
      'Includes detailed photo-documentation of Pulver\'s physical processes in his local Taos outdoor studio.',
      'Highlights themes of spiritual connection, raw materials, and environmental geometry.'
    ],
    link: 'https://harwoodmuseum.org/exhibition/dean-pulver-elemental-resonance/',
    image: 'https://harwoodmuseum.org/wp-content/uploads/dean-pulver-featured-image-860x575-1.jpeg'
  }
];

export const siteData: SiteData = {
  IMAGES,
  bioSummary,
  exhibitionsData,
  writingsData,
  pressData,
  experienceData,
  educationData,
  contactDetails,
  pastExhibitionsData,
};

