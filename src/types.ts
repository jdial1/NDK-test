export interface Exhibition {
  id: string;
  title: string;
  artist?: string;
  role: string;
  date: string;
  year: number;
  location: string;
  description: string;
  details?: string[];
  image: string;
  category: 'Solo' | 'Group' | 'Centennial' | 'Historical' | 'Festival';
  featured?: boolean;
  link?: string;
  reviewUrl?: string;
  reviewLabel?: string;
}

export interface Writing {
  id: string;
  title: string;
  publication: string;
  date: string;
  type: string;
  excerpt: string;
  fullText?: string;
  link?: string;
  amazonLink?: string;
  bamLink?: string;
}

export interface Press {
  id: string;
  title: string;
  source: string;
  date: string;
  quote: string;
  link?: string;
  category: 'Review' | 'Interview' | 'Feature';
  fullText?: string[];
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  duration: string;
  location: string;
  bullets?: string[];
  logoText?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  location: string;
  details?: string;
}

export interface PastHarwoodExhibition {
  id: string;
  title: string;
  date: string;
  description: string;
  caption?: string;
  curatorialDetails?: string[];
  artist?: string;
  link?: string;
  reviewUrl?: string;
  reviewLabel?: string;
  image?: string;
}

