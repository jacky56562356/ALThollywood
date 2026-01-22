
import { Actor, FilmProject, Opportunity, HistoryEvent } from './types';

export const ACTORS: Actor[] = [
  {
    id: 'paul-liu',
    name: 'Paul Liu',
    ageRange: '12-16',
    skills: ['Chinese Kong-Fu', 'Martial Arts Stunts', 'Action Acting'],
    credits: ['ALT Hollywood Movies Filmed', 'International Stunt Team'],
    imageUrl: 'https://i.ibb.co/v40LfrmN/4.png',
  },
  {
    id: 'parker-davies',
    name: 'Parker Davies', 
    ageRange: '8-12',
    skills: ['Professional Acting', 'Runway Modeling', 'Public Speaking'],
    credits: ['4 Hollywood Films', 'National Commercials'],
    imageUrl: 'https://i.ibb.co/6CwNLnd/1.png',
  },
  {
    id: 'veronica-chen',
    name: 'Veronica Chen',
    ageRange: '6-10',
    skills: ['Acting', 'Classical Dance', 'Modeling'],
    credits: ['4 Hollywood Movies Filmed', 'Global Brand Commercials'],
    imageUrl: 'https://i.ibb.co/mVLL5mQs/2.png',
  },
  {
    id: 'catherine-jing',
    name: 'Catherine Jing',
    ageRange: '10-14',
    skills: ['Acting', 'Voiceover', 'Theater Performance'],
    credits: ['4 Hollywood Movies Filmed', 'Short Film Lead'],
    imageUrl: 'https://i.ibb.co/fY46H6Dd/3.png',
  },
  {
    id: 'jolin-wu',
    name: 'Jolin Wu',
    ageRange: '14-18',
    skills: ['Acting', 'Contemporary Dance', 'Bilingual (CN/EN)'],
    credits: ['ALT Hollywood Movies Filmed', 'Drama Series Lead'],
    imageUrl: 'https://i.ibb.co/KpBnB6Mf/5.png',
  },
  {
    id: 'chris-li',
    name: 'Chris Li',
    ageRange: '6-10',
    skills: ['On-Camera Acting', 'Fashion Modeling', 'Bilingual (CN/EN)'],
    credits: ['Hollywood Short Film', 'Brand Commercial'],
    imageUrl: 'https://i.ibb.co/Y7v0Wdb0/20250.jpg',
  },
  {
    id: 'ethan-pan',
    name: 'Ethan Pan',
    ageRange: '8-12',
    skills: ['Acting', 'Hip-Hop Dance', 'Modeling'],
    credits: ['ALT Hollywood Movies Filmed', 'National Print Ad'],
    imageUrl: 'https://i.ibb.co/7JMjy3DF/6.png',
  },
  {
    id: 'xiaowan-jin',
    name: 'Xiaowan Jin',
    ageRange: '10-14',
    skills: ['High Fashion Modeling', 'Actor', 'Bilingual (CN/EN)'],
    credits: ['Multiple Hollywood Movies', 'Editorial Print'],
    imageUrl: 'https://i.ibb.co/1YMZF3XS/9.png',
  },
  {
    id: 'evan-wen',
    name: 'Evan Wen',
    ageRange: '6-10',
    skills: ['Breakdancing', 'Acting', 'Live Performance'],
    credits: ['ALT Hollywood Movies Filmed', 'Talent Showcase winner'],
    imageUrl: 'https://i.ibb.co/60K4WqJV/7.png',
  },
  {
    id: 'aria-song',
    name: 'Aria Song',
    ageRange: '8-12',
    skills: ['Method Acting', 'Emotional Delivery', 'Runway'],
    credits: ['Independent Feature Lead', 'Dream Star Showcase'],
    imageUrl: 'https://picsum.photos/seed/aria-song/600/800',
  },
  {
    id: 'mei-lin',
    name: 'Mei Lin',
    ageRange: '6-10',
    skills: ['Traditional Performance', 'Screen Acting', 'Public Speaking'],
    credits: ['Regional Film Credits', 'Commercial Talent'],
    imageUrl: 'https://picsum.photos/seed/mei-lin/600/800',
  },
  {
    id: 'lucas-kim',
    name: 'Lucas Kim',
    ageRange: '8-12',
    skills: ['Editorial Modeling', 'Acting', 'Athletics'],
    credits: ['Short Film Featured Role', 'National Brand Campaign'],
    imageUrl: 'https://picsum.photos/seed/lucas-kim/600/800',
  },
  {
    id: 'leo-zhang',
    name: 'Leo Zhang',
    ageRange: '10-14',
    skills: ['Comedic Acting', 'Formal Modeling', 'Piano'],
    credits: ['TV Pilot Guest Star', 'IMDb Credit'],
    imageUrl: 'https://picsum.photos/seed/leo-zhang/600/800',
  },
  {
    id: 'chloe-park',
    name: 'Chloe Park',
    ageRange: '14-18',
    skills: ['Screen Acting', 'Commercial Modeling', 'Musical Theater'],
    credits: ['Major Motion Picture Extra', 'Fashion Week Runway'],
    imageUrl: 'https://picsum.photos/seed/chloe-park/600/800',
  },
  {
    id: 'ryan-chen',
    name: 'Ryan Chen',
    ageRange: '8-12',
    skills: ['Martial Arts Acting', 'Voiceover', 'Gymnastics'],
    credits: ['Action Short Film', 'National VO Campaign'],
    imageUrl: 'https://picsum.photos/seed/ryan-chen/600/800',
  },
];

export const FILMS: FilmProject[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `film-${i + 1}`,
  title: `Project Hollywood ${i + 1}`,
  genre: i % 3 === 0 ? "Drama" : i % 3 === 1 ? "Sci-Fi" : "Comedy",
  description: "A professional youth production highlighting talent and modern storytelling. This project involved over 50 youth actors and a full professional crew, shot on location in Los Angeles studios.",
  platform: "Amazon Prime / Festival Circuit",
  posterUrl: `https://picsum.photos/seed/film${i}/600/900`,
  stills: [
    `https://picsum.photos/seed/still${i}a/800/450`,
    `https://picsum.photos/seed/still${i}b/800/450`,
    `https://picsum.photos/seed/still${i}c/800/450`,
    `https://picsum.photos/seed/still${i}d/800/450`,
    `https://picsum.photos/seed/still${i}e/800/450`,
  ],
}));

export const OPPORTUNITIES: Opportunity[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `job-${i + 1}`,
  projectName: `Upcoming Feature ${i + 1}`,
  roleType: i % 4 === 0 ? "Lead" : i % 4 === 1 ? "Supporting" : "Ensemble",
  ageRange: "8-15",
  location: "Los Angeles, CA",
  status: i % 10 === 0 ? "Closed" : "Open",
}));

export const HISTORY: HistoryEvent[] = [
  { 
    year: "Year 1", 
    title: "The Foundation", 
    description: "Founded in Los Angeles with initial agency partnerships, establishing the core curriculum and industry connections.",
    imageUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=600"
  },
  { 
    year: "Year 2", 
    title: "Production Launch", 
    description: "First slate of short film productions and festival entries, marking the transition from classroom theory to camera reality.",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600"
  },
  { 
    year: "Year 3", 
    title: "Talent Expansion", 
    description: "Signed 30+ young talents and expanded our casting network to include major streaming platforms and TV networks.",
    imageUrl: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?auto=format&fit=crop&q=80&w=600"
  },
  { 
    year: "Year 4", 
    title: "Digital Evolution", 
    description: "Launched our dedicated post-production facility, enabling higher quality outputs and faster distribution to digital markets.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600"
  },
  { 
    year: "Year 5", 
    title: "International Circuit", 
    description: "Our student films began accepting awards at international youth film festivals, putting ALT actors on the global map.",
    imageUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&q=80&w=600"
  },
  { 
    year: "Year 6", 
    title: "Studio Infrastructure", 
    description: "Acquired new dedicated soundstages in LA, allowing for multi-cam sitcom setups and green screen VFX productions.",
    imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=600"
  },
  { 
    year: "Year 7", 
    title: "Hollywood Standard", 
    description: "Today, we operate as a fully integrated production house with 100% student placement in professional projects.",
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=600"
  },
];
