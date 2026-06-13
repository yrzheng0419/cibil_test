export type Domain = 'Medical Image' | 'Smart Agriculture' | 'Medical Data' | 'Biosensing' | 'NA';
export type Group = 'ai' | 'statistics' | 'ra';
export type Status = 'current' | 'alumni';
export type DegreeType = 'ms' | 'phd' | 'ra';
export type PubType = 'journal' | 'conference';
export type ActivityType = 'academic' | 'extracurricular';

export interface Member {
  name_en: string;
  name_zh: string;
  group: Group;
  status: Status;
  degree_type: DegreeType;
  year_joined: number;
  year_grad: number | null;
  domain: Domain;
  research_title_en: string;
  research_title_zh: string;
  thesis_url: string | null;
  email: string | null;
  photo_filename: string | null;
}

export interface Publication {
  year: number;
  pub_type: PubType;
  domain: Domain;
  citation: string;
  doi: string | null;
}

export interface GalleryItem {
  date: string;
  type: ActivityType;
  title_en: string;
  title_zh: string;
  remark: string | null;
  photo_filename: string;
}
