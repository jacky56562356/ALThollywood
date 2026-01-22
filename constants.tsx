
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
    id: 'chloe-yu',
    name: 'Chloe Yu',
    ageRange: '10-14',
    skills: ['High Fashion Modeling', 'Actor', 'Bilingual (CN/EN)'],
    credits: ['Multiple Hollywood Movies', 'Editorial Print'],
    imageUrl: 'https://i.ibb.co/VF6CD9f/20250828205506-172-151.jpg',
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
    id: 'xiaowan-jin',
    name: 'Xiaowan Jin',
    ageRange: '10-14',
    skills: ['High Fashion Modeling', 'Actor', 'Bilingual (CN/EN)'],
    credits: ['Multiple Hollywood Movies', 'Editorial Print'],
    imageUrl: 'https://i.ibb.co/1YMZF3XS/9.png',
  },
  {
    id: 'kent-zhao',
    name: 'Kent Zhao',
    ageRange: '6-10',
    skills: ['Traditional Performance', 'Screen Acting', 'Public Speaking'],
    credits: ['Regional Film Credits', 'Commercial Talent'],
    imageUrl: 'https://i.ibb.co/bgQnZQrP/1cbde033c8e622982d9b59686f383e73.jpg',
  },
  {
    id: 'sean-pan',
    name: 'Sean Pan',
    ageRange: '14-18',
    skills: ['Acting', 'Modeling', 'Athletics'],
    credits: ['3 Hollywood Movies Filmed'],
    imageUrl: 'https://i.ibb.co/VpH98tPD/retouched-Carin-Yates-Photography2-3-2024-retouched-sean4.jpg',
  },
  {
    id: 'elsa-gessesse',
    name: 'Elsa Gessesse',
    ageRange: '12-16',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['2 Hollywood Movies Filmed'],
    imageUrl: 'https://i.ibb.co/CKX0y0xN/Wechat-IMG1393.jpg',
  },
  {
    id: 'scarlett-liu',
    name: 'Scarlett Liu',
    ageRange: '6-10',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Movie Filmed', 'Brand Ambassador'],
    imageUrl: 'https://i.ibb.co/F4K7rZqY/retouched-Carin-Yates-Photography2-3-2024-m-Scarlett-4169.jpg',
  },
  {
    id: 'elizabeth-valadez',
    name: 'Elizabeth Valadez',
    ageRange: '8-12',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Movie Filmed', 'Commercial Project'],
    imageUrl: 'https://i.ibb.co/CT2wNVk/DSC00028-edited.jpg',
  },
  {
    id: 'yuxi-ling',
    name: 'Yuxi Ling',
    ageRange: '6-10',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Project', 'Talent Showcase'],
    imageUrl: 'https://i.ibb.co/Z6FPqV6P/a1644427b71929307a2b9360bbca9fc3.jpg',
  },
  {
    id: 'charlene-liu',
    name: 'Charlene Liu',
    ageRange: '6-10',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Short Film', 'Brand Commercial'],
    imageUrl: 'https://i.ibb.co/yc5YBNzL/retouched-Carin-Yates-Photography2-3-2024-Charlene-3m-30.jpg',
  },
  {
    id: 'ling-robison',
    name: 'Ling Robison',
    ageRange: '10-14',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Movie Filmed', 'Fashion Print'],
    imageUrl: 'https://i.ibb.co/nsVwcdPG/20260122131604-1622-151.jpg',
  },
  {
    id: 'lexi-shen',
    name: 'Lexi Shen',
    ageRange: '6-10',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Movie Filmed', 'Commercial Project'],
    imageUrl: 'https://i.ibb.co/RJMv66s/Carin-Yates-Photography10-27-2024-2-pp-removebg-preview.png',
  },
  {
    id: 'katherine-zhang',
    name: 'Katherine Zhang',
    ageRange: '8-12',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Movie Filmed', 'Fashion Print'],
    imageUrl: 'https://i.ibb.co/3m7NqcW0/20260122132047-1628-151.jpg',
  },
  {
    id: 'mason-chen',
    name: 'Mason Chen',
    ageRange: '6-10',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Movie Filmed', 'Commercial Project'],
    imageUrl: 'https://i.ibb.co/GfGWD3mn/20260122132516-1633-151.jpg',
  },
  {
    id: 'jasmine-zhang',
    name: 'Jasmine Zhang',
    ageRange: '6-10',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Movie Filmed', 'Commercial Project'],
    imageUrl: 'https://i.ibb.co/yTbPZXb/Wechat-IMG18.jpg',
  },
  {
    id: 'caleb-lin',
    name: 'Caleb Lin',
    ageRange: '8-12',
    skills: ['Acting', 'Modeling', 'Performing Arts'],
    credits: ['Hollywood Movie Filmed', 'Commercial Project'],
    imageUrl: 'https://i.ibb.co/RpLLMkCc/20260122134407-1644-151.jpg',
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
