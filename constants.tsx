
import { Actor, FilmProject, Opportunity, HistoryEvent } from './types';

// ==================================================================================
// 【小白修改指南】如何换成你自己的图片？
// 1. 去 https://imgbb.com/ 上传你的照片。
// 2. 复制上传后的“直接链接” (Direct Link)。
// 3. 在下面找到 imageUrl: '...', 把引号里的内容换成你的链接。
// ==================================================================================

export const ACTORS: Actor[] = [
  {
    id: 'parker-davies',
    name: 'Parker Davies', // 这里可以改名字，比如改成 "Zhang San"
    ageRange: '8-12',
    skills: ['Professional Acting', 'Runway Modeling', 'Public Speaking'],
    credits: ['4 Hollywood Films', 'National Commercials'],
    
    // 👇👇👇 【重点】修改下面这行引号里的链接 👇👇👇
    imageUrl: 'https://picsum.photos/seed/parker-davies/600/800', 
    // 例如改成: imageUrl: 'https://i.ibb.co/your-photo.jpg',
  },
  {
    id: 'veronica-chen',
    name: 'Veronica Chen',
    ageRange: '6-10',
    skills: ['Acting', 'Classical Dance', 'Modeling'],
    credits: ['4 Hollywood Movies Filmed', 'Global Brand Commercials'],
    
    // 👇👇👇 修改第二张图片 👇👇👇
    imageUrl: 'https://picsum.photos/seed/veronica-chen/600/800',
  },
  {
    id: 'catherine-jing',
    name: 'Catherine Jing',
    ageRange: '10-14',
    skills: ['Acting', 'Voiceover', 'Theater Performance'],
    credits: ['4 Hollywood Movies Filmed', 'Short Film Lead'],
    imageUrl: 'https://picsum.photos/seed/catherine-jing/600/800',
  },
  {
    id: 'paul-liu',
    name: 'Paul Liu',
    ageRange: '12-16',
    skills: ['Chinese Kong-Fu', 'Martial Arts Stunts', 'Action Acting'],
    credits: ['ALT Hollywood Movies Filmed', 'International Stunt Team'],
    imageUrl: 'https://picsum.photos/seed/paul-liu/600/800',
  },
  {
    id: 'jolin-wu',
    name: 'Jolin Wu',
    ageRange: '14-18',
    skills: ['Acting', 'Contemporary Dance', 'Bilingual (CN/EN)'],
    credits: ['ALT Hollywood Movies Filmed', 'Drama Series Lead'],
    imageUrl: 'https://picsum.photos/seed/jolin-wu/600/800',
  },
  {
    id: 'ethan-pan',
    name: 'Ethan Pan',
    ageRange: '8-12',
    skills: ['Acting', 'Hip-Hop Dance', 'Modeling'],
    credits: ['ALT Hollywood Movies Filmed', 'National Print Ad'],
    imageUrl: 'https://picsum.photos/seed/ethan-pan/600/800',
  },
  {
    id: 'evan-wen',
    name: 'Evan Wen',
    ageRange: '6-10',
    skills: ['Breakdancing', 'Acting', 'Live Performance'],
    credits: ['ALT Hollywood Movies Filmed', 'Talent Showcase winner'],
    imageUrl: 'https://picsum.photos/seed/evan-wen/600/800',
  },
  {
    id: 'xiaowan-jin',
    name: 'Xiaowan Jin',
    ageRange: '10-14',
    skills: ['High Fashion Modeling', 'Actor', 'Bilingual (CN/EN)'],
    credits: ['Multiple Hollywood Movies', 'Editorial Print'],
    imageUrl: 'https://picsum.photos/seed/xiaowan-jin/600/800',
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
  
  // 👇👇👇 电影海报图片链接改这里 👇👇👇
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
  { year: "Year 1", title: "Establishment", description: "Founded in Los Angeles with initial agency partnerships." },
  { year: "Year 2", title: "Production Launch", description: "First short film productions and festival entries." },
  { year: "Year 3", title: "Expansion", description: "Signed 30+ young talents and expanded casting network." },
  { year: "Present", title: "Hollywood Standard", description: "Ongoing quarterly productions and global talent search." },
];
