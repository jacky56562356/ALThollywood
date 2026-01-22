
export interface Actor {
  id: string;
  name: string;
  ageRange: string;
  skills: string[];
  credits: string[];
  imageUrl: string;
}

export interface FilmProject {
  id: string;
  title: string;
  genre: string;
  description: string;
  platform: string;
  posterUrl: string;
  stills: string[];
}

export interface Opportunity {
  id: string;
  projectName: string;
  company: string;
  roleType: string;
  gender: 'Male' | 'Female' | 'Any';
  genre: string;
  ageRange: string;
  location: string;
  shootDates: string;
  requirements: string;
  status: 'Open' | 'Closed' | 'In Progress';
}

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  uploadDate: string;
}
