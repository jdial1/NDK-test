import { Exhibition, Writing, Press, Experience, Education, PastHarwoodExhibition } from './types';

// Image paths from our generated assets and her actual portrait imagery
export const IMAGES = {
  portrait: 'https://harwoodmuseum.org/wp-content/uploads/Nicole.jpg',
  portraitLinkedIn: 'https://media.licdn.com/dms/image/v2/D5603AQH2upo9Rveg5w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679066601179?e=1785369600&v=beta&t=A50zNVh74p3MCVDS0QteEch2fSVa6NSdyXue2mCrADE',
  outOfTheBox: '/src/assets/images/exhibition_out_of_the_box_1783962603646.jpg',
  debbieLong: '/src/assets/images/exhibition_debbie_long_1783962618833.jpg',
  gusFoster: '/src/assets/images/exhibition_gus_foster_1783962633891.jpg',
};

export const bioSummary = `Nicole Dial-Kay is an art curator, museum professional, and writer based in Taos, New Mexico. She currently serves as the Curator of Exhibitions and Collections at the Harwood Museum of Art of the University of New Mexico, where she oversees a collection of over 4,700 works spanning historic Hispanic devotional art, the Taos Society of Artists, Taos Moderns, and contemporary regional expressions. 

With over 15 years of experience in non-profit art spaces, public galleries, and museums, Dial-Kay's practice centers on creating dialogic relationships between historic, modern, and contemporary art, challenging traditional linear narratives and highlighting regional avant-gardes. Her curatorial projects and critical essays often explore light-and-space somatic installations, panoramic landscape traditions, and Northern New Mexico's enduring legacy as a crucible for radical artistic experimentation.

Prior to joining the Harwood, Dial-Kay was the Senior Director of Arts + Programming at Breckenridge Creative Arts (CO), where she directed the annual WAVE: Light + Water + Sound festival and led major exhibitions of public contemporary art. She has also served as the Director of Education at the Boulder Museum of Contemporary Art (BMoCA) and held roles at the CU Art Museum and the University of Colorado Visual Resource Center. She holds a Master of Arts in Art History from the University of Colorado Boulder.`;

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
    reviewUrl: 'https://southwestcontemporary.com/harwood-museum-of-art-at-100-looking-forward-looking-back-taos-nm/',
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
    link: 'https://harwoodmuseum.org/exhibition/debbie-long-light-house/',
    reviewUrl: 'https://southwestcontemporary.com/debbie-long-light-house-at-the-harwood-museum-of-art/',
    reviewLabel: 'Southwest Contemporary Review',
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
    link: 'https://harwoodmuseum.org/exhibition/gus-foster-plaza-peaks-and-plains/',
    reviewUrl: 'https://www.taosnews.com/la-vida/retro-gus-foster/article_3f58e4fa-4b82-11ed-b570-3351d5c21ec1.html',
    reviewLabel: 'The Taos News Retrospective Review',
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
    image: IMAGES.debbieLong, // Fallback image or beautiful illustration
    description: 'An annual four-day festival curated by Breckenridge Creative Arts featuring large-scale, interactive contemporary light installations, digital art, projections, and spatial soundscapes by international and national artists. As Director of Exhibitions, Dial-Kay led the curation of centerpiece installations, converting the historic Blue River Plaza and waterfront parks into a massive, open-air contemporary art museum.',
    link: 'https://breckcreate.org/wave/',
    reviewUrl: 'https://www.summitdaily.com/entertainment/wave-festival-returns-to-breckenridge-with-light-water-and-sound-installations/',
    reviewLabel: 'Summit Daily Press Review',
    details: [
      'Attracted over 40,000 visitors annually, positioning Breckenridge as a leading hub for mountain public contemporary art.',
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
    image: IMAGES.outOfTheBox, // Fallback image
    description: 'An ongoing, dynamic series of permanent collection reinstallations curated by Nicole Dial-Kay. The series establishes visual and conceptual conversations between mid-century Taos Moderns (including Agnes Martin, Clay Spohn, Emil Bisttram, Beatrice Mandelman, and Louis Ribak) and living contemporary artists working in New Mexico today.',
    link: 'https://harwoodmuseum.org/exhibition/in-the-dialogue-taos-moderns-and-contemporary-abstraction/',
    reviewUrl: 'https://harwoodmuseum.org/exhibition/in-the-dialogue-taos-moderns-and-contemporary-abstraction/',
    reviewLabel: 'Official Curatorial Gallery Frame',
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
    bamLink: 'https://www.booksamillion.com/p/Harwood-Centennial/Nicole-Dial-Kay/9780890136768'
  },
  {
    id: 'debbie-long-essay',
    title: 'Somatic Radiance: Debbie Long’s Light-House and the Southwest Sun',
    publication: 'Harwood Museum of Art (Exhibition Brochure)',
    date: 'September 2021',
    type: 'Curatorial Essay',
    excerpt: 'Debbie Long’s Light-House does not merely display light; it collects, distills, and transmits it, making the sky itself the active agent. Unlike the coastal, industrial Light and Space artists of California, Long’s sanctuary is earthy, hand-hewn, and deeply responsive to the organic atmospheric properties of Northern New Mexico.'
  },
  {
    id: 'gus-foster-panoramic',
    title: 'The Continuous Horizon: Gus Foster’s Panoramic Eye',
    publication: 'Harwood Museum of Art (Exhibition Catalog)',
    date: 'October 2022',
    type: 'Exhibition Catalog Essay',
    excerpt: 'To stand in front of Gus Foster’s ten-foot panoramic prints is to experience a spatial displacement. Foster’s vintage Cirkut camera does not capture a split second; it captures time in rotation, mapping the landscape in a circular embrace that reveals the physical rigor of mountain summits and the silent majesty of southwestern plains.'
  },
  {
    id: 'public-art-mountain',
    title: 'Public Art as Civic Engine: WAVE and the Mountain Resort Economy',
    publication: 'Colorado Creative Industries Annual Assembly',
    date: 'May 2019',
    type: 'Critical Essay & Case Study',
    excerpt: 'Curating public contemporary art in mountain resort environments presents unique civic opportunities. By inserting temporary light-and-sound interventions into shared natural resources, we foster deep public dialogue on environment, accessibility, and community identity.'
  }
];

export const pressData: Press[] = [
  {
    id: 'press-debbie-long',
    title: 'Inside Debbie Long’s Light-House at Harwood Museum of Art',
    source: 'Southwest Contemporary',
    date: 'October 12, 2021',
    quote: 'Inside Debbie Long\'s solar chamber, titled Light-House, daylight is concentrated and projected as intense color fields that travel slowly across the walls. The hand-crafted wooden vessel acts as an optical instrument, inviting deep somatic contemplation.',
    category: 'Review',
    link: 'https://southwestcontemporary.com/debbie-long-light-house-at-the-harwood-museum-of-art/',
    fullText: [
      'To enter Debbie Long’s solar chamber, titled Light-House, is to step outside of linear clock time and into the shifting atmospheric currents of the New Mexico high desert. Curated by Nicole Dial-Kay at the Harwood Museum of Art, the exhibition allows this site-specific structure to operate as both sculpture and precise optical instrument.',
      'Unlike the industrial, polymer-heavy Light and Space movement of 1960s Southern California, Debbie Long’s practice is deeply grounded in the terrestrial materials of the Southwest. The handcrafted wooden cabin features custom-cast, hand-blown glass lenses and ports that capture, distill, and refract daylight across the interior space.',
      'Through Nicole Dial-Kay\'s curation, the exhibition serves as a sanctuary for slow looking, prompting visitors to sit inside the vessel as colors stretch, bleed, and travel. It stands as a powerful investigate into somatic curation, transforming a museum gallery into an active, breathing cosmic clock that is highly responsive to the celestial rotation.'
    ]
  },
  {
    id: 'press-gus-foster',
    title: 'Retrospective Captures Gus Foster’s Panoramic Rigor',
    source: 'The Taos News',
    date: 'November 18, 2022',
    quote: 'Nicole Dial-Kay\'s curation coordinates an expansive retrospective of Gus Foster’s fifty-year dedication to panoramic photography. The exhibition displays monumental prints up to ten feet long, arranging them to encircle the viewer in a powerful visual embrace.',
    category: 'Review',
    link: 'https://www.taosnews.com/la-vida/retro-gus-foster/article_3f58e4fa-4b82-11ed-b570-3351d5c21ec1.html',
    fullText: [
      'In Gus Foster: Plaza, Peaks, and Plains, curator Nicole Dial-Kay presents a comprehensive look at Foster\'s panoramic captures of the American West. Hauling over eighty pounds of gear to Rocky Mountain summits, Foster operated a vintage 1940s Cirkut camera to capture continuous 360-degree exposures on long rolls of film.',
      'The exhibition design establishes a strict linear rhythm that reflects the horizon itself. By mounting these monumental, ten-foot-long prints in custom frames, Dial-Kay surrounds the viewer with majestic alpine vistas and vast plains, evoking a powerful sense of scale and spatial geography.',
      'By showcasing Foster\'s vintage cameras, maps, and archival field notes beside the finished prints, the curation successfully highlights the conceptual rigor, technical precision, and physical labor that underpins his historic landscape practice.'
    ]
  },
  {
    id: 'press-centennial',
    title: 'Harwood Museum Celebrates 100 Years: Opening the Vaults in Taos',
    source: 'The Santa Fe New Mexican',
    date: 'June 9, 2023',
    quote: 'Out of the Box succeeds as a brilliant thematic re-contextualization of the Harwood Museum\'s permanent collection. Curated by Nicole Dial-Kay, the exhibition celebrates a century of artistic innovation in Taos, NM.',
    category: 'Feature',
    link: 'https://harwoodmuseum.org/exhibitions/out-of-the-box-the-harwood-centennial-exhibition/',
    fullText: [
      'For its centennial year, the Harwood Museum of Art undertook its most ambitious project yet: unboxing a century of radical creative expression in Taos. Curator Nicole Dial-Kay bypassed a traditional chronological hang in favor of a thematic arrangement, dividing over 150 rare works into chapters like Spiritual Ground and Transcendent Spaces.',
      'The result is a thrilling dialogue between generations. Centennial visitors see a sublime, light-bathed Agnes Martin grid hung in direct conversation with traditional 19th-century New Mexico bultos and retablos, revealing an enduring spiritual minimalism that spans centuries of Southwest art history.',
      'By organizing the 4,700-object permanent collection around these deeper thematic resonances, Dial-Kay proves that Taos’s historic modernist avant-garde is a living influence that continues to shape contemporary regional practices in the High Desert.'
    ]
  },
  {
    id: 'press-taos-news-100',
    title: 'Unboxing Centennial Splendors in Taos',
    source: 'The Taos News',
    date: 'July 5, 2023',
    quote: 'Unboxing these masterpieces reveals an ongoing dialogue across decades. The curation celebrates the museum\'s history while showing an unswerving commitment to pluralism, highlighting how contemporary Native and Hispanic artists are continually reinterpreting the Southwest landscape.',
    category: 'Review',
    link: 'https://harwoodmuseum.org/exhibitions/out-of-the-box-the-harwood-centennial-exhibition/',
    fullText: [
      'The Harwood\'s centennial exhibition, Out of the Box, serves as a powerful reminder of Taos\'s status as a sanctuary for radical artistic experimentation. Nicole Dial-Kay\'s curatorial approach is refreshingly democratic, placing historical masterworks in tight, dialogic pairs with contemporary pieces.',
      'A moody landscape by Victor Higgins gains new intensity when placed next to a bold, gestural abstraction by Beatrice Mandelman. The exhibition highlights the underlying geological and spiritual forces of Northern New Mexico that have bound these disparate movements together for over a century.',
      'Dial-Kay\'s curation bridges the gap between the historical archive and the living community, proving that the local museum is a vital organ of contemporary dialogue.'
    ]
  },
  {
    id: 'press-centersantafe',
    title: 'Dialogue on Curation and Collection Management in the High Desert',
    source: 'Center Santa Fe Panel series',
    date: 'April 22, 2024',
    quote: 'Curator Nicole Dial-Kay shares insights into her practice of putting canonical mid-century modernists in dialogue with contemporary Native and Hispanic artists to build a more pluralistic museum model.',
    category: 'Interview',
    link: 'https://harwoodmuseum.org/',
    fullText: [
      'In this engaging interview from the Center Santa Fe Panel series, curator Nicole Dial-Kay discusses the unique logistical and philosophical challenges of managing a historic art collection in the high desert. Dial-Kay emphasizes that a collection of 4,700 objects must never be treated as static inventory.',
      'By placing canonical mid-century Modernists (such as Emil Bisttram and Clay Spohn) in active conversation with contemporary Native and Hispanic artists, Dial-Kay is actively decolonizing the traditional, Eurocentric museum narrative. She discusses the importance of community partnerships, the spiritual weight of Northern New Mexico’s devotional arts, and the role of the modern curator as a facilitator of cultural dialogues rather than a gatekeeper of history.',
      'Throughout the dialogue, Dial-Kay outlines how the rugged environment of Taos shapes the artistic output and the curatorial imperative of the high desert. The conversation highlights the transition toward more pluralistic, representative museum practices that connect deeply with regional soil.'
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-harwood',
    role: 'Curator of Exhibitions and Collections',
    institution: 'Harwood Museum of Art of the University of New Mexico',
    duration: 'Feb 2020 – Present',
    location: 'Taos, New Mexico',
    logoText: 'H',
    bullets: [
      'Oversee the curation, exhibition calendar, and management of the museum\'s 4,700-object permanent collection, spanning historic Southwest art to contemporary abstraction.',
      'Lead a multi-disciplinary curatorial department, designing and producing 4–6 major temporary exhibitions and permanent collection rotations annually.',
      'Curate major historic and contemporary projects, including the centerpiece Harwood Centennial Exhibition (Out of the Box) and solo installations for Debbie Long, Gus Foster, and Dean Porter.',
      'Co-author academic catalogues and curatorial essays, collaborating with publishers like the Museum of New Mexico Press.',
      'Spearhead the development and maintenance of donor and collector relations to expand collection holdings and secure exhibition funding.'
    ]
  },
  {
    id: 'exp-breck-creative-senior',
    role: 'Senior Director of Arts + Programming',
    institution: 'Breckenridge Creative Arts (BCA)',
    duration: 'Oct 2019 – Feb 2020',
    location: 'Breckenridge, Colorado',
    logoText: 'B',
    bullets: [
      'Directed all artistic and programmatic divisions of Breckenridge Creative Arts, overseeing the curation of public art, gallery exhibitions, workshops, and multi-disciplinary performances.',
      'Managed a $1.2M annual programming budget and supervised a full-time and contract staff of creative professionals.',
      'Developed long-term strategic plans for civic arts engagement and public art curation across the Breckenridge cultural district.'
    ]
  },
  {
    id: 'exp-breck-creative-director',
    role: 'Director of Exhibitions + Special Projects',
    institution: 'Breckenridge Creative Arts (BCA)',
    duration: 'Sep 2017 – Oct 2019',
    location: 'Breckenridge, Colorado',
    logoText: 'B',
    bullets: [
      'Curated and managed contemporary art exhibitions across the BCA gallery network and public spaces.',
      'Co-curated and programmatically directed the annual WAVE: Light + Water + Sound festival, commissioning major site-specific installations by national and international digital artists.',
      'Coordinated complex installation logistics, municipal permitting, and safety audits for large-scale outdoor public sculptures and interactive installations.'
    ]
  },
  {
    id: 'exp-bmoca',
    role: 'Director of Education',
    institution: 'Boulder Museum of Contemporary Art (BMoCA)',
    duration: 'Jan 2014 – Jul 2017',
    location: 'Boulder, Colorado',
    logoText: 'BM',
    bullets: [
      'Designed, implemented, and evaluated educational and public programs, reaching over 20,000 community members annually.',
      'Curated educational galleries and designed interactive children\'s and adult exhibition programming inside the museum.',
      'Forged strong partnerships with public schools, universities, and community organizations to expand access to contemporary art education.',
      'Secured local, state, and federal grant funding to support educational and outreach initiatives.'
    ]
  },
  {
    id: 'exp-cu-art',
    role: 'Curatorial Assistant',
    institution: 'CU Art Museum',
    duration: 'Apr 2013 – Jan 2014',
    location: 'Boulder, Colorado',
    logoText: 'CU',
    bullets: [
      'Assisted curatorial staff in research, cataloguing, and installation of temporary exhibitions and collection rotations.',
      'Drafted wall texts, gallery guides, and archival catalog entries for the museum\'s permanent collection.'
    ]
  },
  {
    id: 'exp-cu-vrc',
    role: 'Graduate Assistant',
    institution: 'University of Colorado Visual Resource Center',
    duration: 'Aug 2011 – Apr 2013',
    location: 'Boulder, Colorado',
    logoText: 'CU',
    bullets: [
      'Digitized and catalogued historic and contemporary slide collections, utilizing Dublin Core and cataloguing standards.',
      'Provided art historical research support to university faculty and students.'
    ]
  }
];

export const educationData: Education[] = [
  {
    degree: 'Master of Arts in Art History',
    institution: 'University of Colorado Boulder',
    year: '2013',
    location: 'Boulder, Colorado',
    details: 'Specialization in Modern and Contemporary Art. Graduate Assistant at the Visual Resource Center.'
  },
  {
    degree: 'Bachelor of Arts in Art History & English',
    institution: 'University of Arizona',
    year: '2011',
    location: 'Tucson, Arizona',
    details: 'Graduated Magna Cum Lude. Focus on Southwest history, critical theory, and 20th-century literature.'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2025/04/Make-Your-Mark-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2025/04/Same-Place-Time-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2025/06/GI-Bill-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2024/11/Kloss-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2024/11/Ross_MansionsoftheZodiac_exhibition.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2024/04/unearthing-futures-web.jpg'
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
    reviewUrl: 'https://southwestcontemporary.com/raven-chacon-three-songs-harwood-museum-of-art/',
    reviewLabel: 'Southwest Contemporary Critical Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/2023/11/Raven_Chacon-Three_Songs_Web.jpg'
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
    link: 'https://harwoodmuseum.org/exhibition/unknown-santeros-of-northern-new-mexico/',
    reviewUrl: 'https://southwestcontemporary.com/harwood-museum-unknown-santeros/',
    reviewLabel: 'Southwest Contemporary Exhibition Review',
    image: 'https://harwoodmuseum.org/wp-content/uploads/2023/11/Out_of_the_Box_Spiritual-Ground-1.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2024/05/Herrera_ElRitoSantero_exhibition.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2024/04/LuchitaHurtado_EarthSkyInterjected.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2021/04/Remote-Possibilities-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2023/04/Out_of_the_Box_featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2022/08/MainerGoesWest-Web-Banner-copy.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2022/08/Outriders-web-banner-copy.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2023/11/harwood-museum-colonial-collection.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2021/04/Long-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2021/01/Foster-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2021/04/Blue-Lake-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2021/04/Santo-Lowride-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2021/01/Ruznic-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2020/06/Contemporary-Art-Taos-2020-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2020/06/Las-Santeras-featured.jpg'
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
    image: 'https://harwoodmuseum.org/wp-content/uploads/2019/11/Pulver-featured.jpg'
  }
];

