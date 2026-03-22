
import { Actor, FilmProject, Opportunity, HistoryEvent, Resource } from './types';

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
    credits: ['ALT Hollywood Movies Filmed', 'Performance Showcase winner'],
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
    credits: ['Regional Film Credits', 'Commercial Performer'],
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
    credits: ['Hollywood Project', 'Performance Showcase'],
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
    imageUrl: 'https://i.ibb.co/nsVwcdPG/20260122131604-1.png',
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

export const FILMS: FilmProject[] = [
  {
    id: 'film-poster-new-3',
    title: 'ALT Hollywood: The New Era',
    genre: "Documentary",
    description: "Witness the dawn of a new generation of Hollywood performers in this exclusive feature presentation.",
    platform: "Global Premiere",
    posterUrl: "https://i.ibb.co/0RBsdNHX/Chat-GPT-Image-2026-1-22-15-20-56.png",
    stills: [
      "https://i.ibb.co/HTFkhG1c/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-d6e137ff-dba2-42c3-a871-20cb4c914e36-3.png",
      "https://i.ibb.co/qLx5FzvQ/20260122155926-1673-151.jpg",
      "https://i.ibb.co/LXS8q7yn/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-5253418c-4b1d-4d9b-8f51-219cc38fdef7-3.png"
    ]
  },
  {
    id: 'film-poster-new-4',
    title: 'Rising Stars 2026',
    genre: "Showcase",
    description: "A spectacular visual journey featuring the breakthrough performances of our 2026 cohort.",
    platform: "Streaming Now",
    posterUrl: "https://i.ibb.co/Y7Pp984p/Chat-GPT-Image-2026-1-22-15-34-28.png",
    stills: [
      "https://i.ibb.co/S7JBKpZp/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-4ec21d2d-7796-4a10-a5a4-8ae8681d2ad7-1.png",
      "https://i.ibb.co/6JTLb8tt/20260122155823-1666-151.jpg",
      "https://i.ibb.co/Y4DfD2Vw/20260122155809-1664-151.jpg"
    ]
  },
  {
    id: 'film-poster-new-1',
    title: 'Year End Grand Ceremony',
    genre: "Event",
    description: "The grand celebration of our year-end achievements featuring all our stars. A night of glamour, awards, and cinematic excellence.",
    platform: "Live / Streaming",
    posterUrl: "https://i.ibb.co/Lz53W353/YEAR-END-GRAND-CEREMONY.png",
    stills: [
      "https://i.ibb.co/LXS8q7yn/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-5253418c-4b1d-4d9b-8f51-219cc38fdef7-3.png",
      "https://i.ibb.co/qLx5FzvQ/20260122155926-1673-151.jpg",
      "https://i.ibb.co/HTFkhG1c/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-d6e137ff-dba2-42c3-a871-20cb4c914e36-3.png"
    ]
  },
  {
    id: 'film-poster-new-2',
    title: 'ALT Dream Star New Film',
    genre: "Premiere",
    description: "Our latest feature film production showcasing the new wave of performers. Shot in professional studios in Los Angeles.",
    platform: "Theatrical",
    posterUrl: "https://i.ibb.co/C5ym3kR9/ALT-DREAM-STAR-NEW-FILM.png",
    stills: [
      "https://i.ibb.co/6JTLb8tt/20260122155823-1666-151.jpg",
      "https://i.ibb.co/Y4DfD2Vw/20260122155809-1664-151.jpg",
      "https://i.ibb.co/S7JBKpZp/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-4ec21d2d-7796-4a10-a5a4-8ae8681d2ad7-1.png"
    ]
  },
  {
    id: 'film-poster-1',
    title: 'ALT Hollywood Dream Star: Official Selection',
    genre: "Drama",
    description: "The official showcase of ALT Hollywood Dream Star productions, featuring our top young performers in a professional cinematic environment.",
    platform: "Amazon Prime / Festival Circuit",
    posterUrl: "https://i.ibb.co/5XkvwS0b/image.png",
    stills: [
      "https://i.ibb.co/HTFkhG1c/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-d6e137ff-dba2-42c3-a871-20cb4c914e36-3.png",
      "https://i.ibb.co/S7JBKpZp/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-4ec21d2d-7796-4a10-a5a4-8ae8681d2ad7-1.png",
      "https://i.ibb.co/LXS8q7yn/u8238228639-behind-the-scenes-photo-of-a-real-childrens-movie-5253418c-4b1d-4d9b-8f51-219cc38fdef7-3.png",
      "https://i.ibb.co/qLx5FzvQ/20260122155926-1673-151.jpg"
    ]
  }
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'cast-2026-001',
    projectName: 'Chronicles of the Star Walker',
    company: 'Nebula Core Pictures',
    roleType: 'Lead (Hero)',
    gender: 'Any',
    genre: 'Sci-Fi Adventure',
    ageRange: '11-15',
    location: 'Los Angeles, CA',
    shootDates: 'June 15 - July 30, 2026',
    requirements: 'Must have high emotional range and ability to handle complex dialogue. Wire-work stunts capability is a plus.',
    status: 'Open',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-002',
    projectName: 'The Secret of Maplewood Manor',
    company: 'Silver Bourne Productions',
    roleType: 'Supporting (Sibling)',
    gender: 'Male',
    genre: 'Mystery / Drama',
    ageRange: '8-12',
    location: 'Pasadena, CA',
    shootDates: 'August 10 - Sept 5, 2026',
    requirements: 'Requires subtle emotional acting and ability to cry on cue. Strong chemistry with lead actor required.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-003',
    projectName: 'Operation: Lunchbox',
    company: 'Golden Arch Entertainment',
    roleType: 'Ensemble (Spy Team)',
    gender: 'Any',
    genre: 'Action Comedy',
    ageRange: '6-10',
    location: 'Burbank Studios, CA',
    shootDates: 'July 1 - July 21, 2026',
    requirements: 'High energy, great comedic timing, and improvisation skills. Comfort with physical comedy scenes.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-004',
    projectName: 'Echoes of the Deep',
    company: 'Lumina Horizon Studios',
    roleType: 'Lead (Protagonist)',
    gender: 'Female',
    genre: 'Thriller',
    ageRange: '13-17',
    location: 'Malibu / Los Angeles',
    shootDates: 'Sept 15 - Nov 10, 2026',
    requirements: 'Intense dramatic performance required. Character deals with loss and fear. Strong swimming skills needed.',
    status: 'In Progress',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-005',
    projectName: 'Robo-Pet',
    company: 'Nebula Core Pictures',
    roleType: 'Supporting (Tech Whiz)',
    gender: 'Female',
    genre: 'Family Sci-Fi',
    ageRange: '9-13',
    location: 'Los Angeles, CA',
    shootDates: 'May 20 - June 25, 2026',
    requirements: 'Fast talker, confident, ability to memorize technical jargon quickly. Expressive facial reactions.',
    status: 'Open',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-006',
    projectName: 'Canvas of Dreams',
    company: 'Silver Bourne Productions',
    roleType: 'Lead (The Artist)',
    gender: 'Male',
    genre: 'Coming of Age / Drama',
    ageRange: '12-16',
    location: 'Downtown LA',
    shootDates: 'Oct 1 - Nov 15, 2026',
    requirements: 'Vulnerable, quiet intensity. Artistic ability (sketching/painting) is highly preferred.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-007',
    projectName: 'Neon Racers',
    company: 'Starlight Peak Films',
    roleType: 'Supporting (Rival)',
    gender: 'Male',
    genre: 'Action / Sports',
    ageRange: '7-11',
    location: 'Long Beach, CA',
    shootDates: 'July 15 - August 15, 2026',
    requirements: 'Competitive attitude, sporty look. Scenes involve go-kart racing simulation.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-008',
    projectName: 'The Velvet Key',
    company: 'Lumina Horizon Studios',
    roleType: 'Lead (Detective)',
    gender: 'Female',
    genre: 'Mystery',
    ageRange: '9-13',
    location: 'Historic LA',
    shootDates: 'Jan 10 - Feb 20, 2026',
    requirements: 'Mature demeanor for age, inquisitive, ability to carry scenes with adult actors.',
    status: 'Open',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-009',
    projectName: 'Future Tech Commercial',
    company: 'Silicon Valley Media',
    roleType: 'Principal',
    gender: 'Any',
    genre: 'Commercial',
    ageRange: '8-12',
    location: 'San Francisco / LA',
    shootDates: 'April 5 - April 7, 2026',
    requirements: 'Tech-savvy look, comfortable interacting with tablets and green screens. Expressive facial features.',
    status: 'Open',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-010',
    projectName: 'The Little Bear Adventures',
    company: 'Animation Works Studio',
    roleType: 'Voiceover (Lead)',
    gender: 'Male',
    genre: 'Animation',
    ageRange: '6-9',
    location: 'Burbank Recording Studio',
    shootDates: 'May 2026 (Multiple Sessions)',
    requirements: 'Energetic, raspy or unique voice character. Must take direction well in booth.',
    status: 'Open',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-011',
    projectName: 'Summer Pop Anthem',
    company: 'Chart Topper Records',
    roleType: 'Dancer / Extra',
    gender: 'Any',
    genre: 'Music Video',
    ageRange: '13-17',
    location: 'Venice Beach, CA',
    shootDates: 'June 20, 2026',
    requirements: 'Good rhythm, hip-hop or contemporary dance skills preferred. Summer beach attire.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-012',
    projectName: 'The Silent Playground',
    company: 'Dark Horizon Films',
    roleType: 'Supporting (The Ghost)',
    gender: 'Female',
    genre: 'Horror / Thriller',
    ageRange: '7-10',
    location: 'Altadena, CA',
    shootDates: 'Oct 10 - Oct 15, 2026',
    requirements: 'Pale complexion, ability to stay very still. Gymnastics ability is a plus for movement scenes.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-013',
    projectName: 'Back to School 2026',
    company: 'Global Retail Brand',
    roleType: 'Model (Print)',
    gender: 'Any',
    genre: 'Print / Commercial',
    ageRange: '5-14',
    location: 'Los Angeles Studio',
    shootDates: 'March 15, 2026',
    requirements: 'Bright smiles, diverse ethnicities. Comfortable changing outfits quickly.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-014',
    projectName: 'Kingdom of Clouds',
    company: 'Epic Sagacom',
    roleType: 'Flashback (Young Hero)',
    gender: 'Male',
    genre: 'Fantasy Feature',
    ageRange: '10-13',
    location: 'Soundstage 4, Hollywood',
    shootDates: 'July 2026',
    requirements: 'Resemblance to lead actor (Caucasian, brown hair). Sword fighting basics (will train).',
    status: 'In Progress',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-015',
    projectName: 'Science Squad',
    company: 'EduTV Network',
    roleType: 'Host / Presenter',
    gender: 'Female',
    genre: 'Educational Series',
    ageRange: '12-15',
    location: 'Culver City, CA',
    shootDates: 'Weekly, Summer 2026',
    requirements: 'Clear diction, high energy, interest in science/chemistry. Teleprompter reading skills.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-016',
    projectName: 'Family Game Night',
    company: 'Boardwalk Games',
    roleType: 'Ensemble Family',
    gender: 'Any',
    genre: 'Commercial',
    ageRange: '8-14',
    location: 'Sherman Oaks (House Location)',
    shootDates: 'April 22, 2026',
    requirements: 'Sibling chemistry needed. Authentic laughter and competitive spirit.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-017',
    projectName: 'Midnight Detectives',
    company: 'StreamLine Original',
    roleType: 'Background / Featured',
    gender: 'Any',
    genre: 'TV Series',
    ageRange: '14-18',
    location: 'High School Location, LA',
    shootDates: 'May 1 - May 5, 2026',
    requirements: 'Look like high school students. Various styles (Goth, Jock, Prep) needed.',
    status: 'Open',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-018',
    projectName: 'Toy Unboxing Mania',
    company: 'Digital Kids Network',
    roleType: 'Host',
    gender: 'Any',
    genre: 'Web Series',
    ageRange: '6-9',
    location: 'YouTube Space LA',
    shootDates: 'Monthly Recurring',
    requirements: 'Extremely high energy, loud voice, engaging personality. Obsessed with toys.',
    status: 'Open',
    unionStatus: 'Non-Union'
  },
  {
    id: 'cast-2026-019',
    projectName: 'The Last Symphony',
    company: 'Indie Art Pictures',
    roleType: 'Supporting (Prodigy)',
    gender: 'Any',
    genre: 'Drama Feature',
    ageRange: '8-12',
    location: 'Disney Concert Hall / Studio',
    shootDates: 'August 2026',
    requirements: 'Must play Violin or Cello at an intermediate/advanced level. Serious acting role.',
    status: 'Open',
    unionStatus: 'Union'
  },
  {
    id: 'cast-2026-020',
    projectName: 'Galactic Rangers',
    company: 'Starlight Studios',
    roleType: 'Action Double / Stunt',
    gender: 'Female',
    genre: 'Sci-Fi TV',
    ageRange: '12-15',
    location: 'Vasquez Rocks',
    shootDates: 'June 10 - June 12, 2026',
    requirements: 'Gymnastics/Parkour background mandatory. Willing to wear prosthetics/makeup.',
    status: 'Open',
    unionStatus: 'Union'
  }
];

export const HISTORY: HistoryEvent[] = [
  { 
    year: "Year 1", 
    title: "The Foundation", 
    description: "Founded in Los Angeles with initial industry partnerships, establishing the core curriculum and production connections.",
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
    title: "Artistic Expansion", 
    description: "Trained 30+ young performers and expanded our production network to include major streaming platforms and TV networks.",
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
    description: "Today, we operate as a fully integrated production house with 100% student participation in professional projects.",
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=600"
  },
];

export const RESOURCES: Resource[] = [
  {
    id: 'res-official-form',
    title: 'Hollywood Kids Movie Entry Form',
    description: 'Official registration form including biometrics and personal preferences. (Official PDF)',
    fileUrl: 'data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmoKICA8PCAvVHlwZSAvQ2F0YWxvZwogICAgIC9QYWdlcyAyIDAgUgogID4+CmVuZG9iagoyIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2VzCiAgICAgL0tpZHMgWyAzIDAgUiBdCiAgICAgL0NvdW50IDEKICAgICAvTWVkaWFCb3ggWyAwIDAgNTk1LjI4IDg0MS44OSBdCiAgPj4KZW5kb2JqCjMgMCBvYmoKICA8PCAvVHlwZSAvUGFnZQogICAgIC9QYXJlbnQgMiAwIFcKICAgICAvUmVzb3VyY2VzIDw8CiAgICAgICAgL0ZvbnQgPDwgL0YxIDQgMCBVID4+CiAgICAgPj4KICAgICAvQ29udGVudHMgNSAwIFIKICA+PgplbmRvYmoKNCAwIG9iagogIDw8IC9UeXBlIC9Gb250CiAgICAgL1N1YnR5cGUgL1R5cGUxCiAgICAgL0Jhc2VGb250IC9IZWx2ZXRpY2EKICA+PgplbmRvYmoKNSAwIG9iagogIDw8IC9MZW5ndGggODggPj4Kc3RyZWFtCkJUCi9GMSAyNCBUZgoxMDAgNzAwIFRkCihBTFQgSE9MTFlXT09EIERSRUFNIFNUQVIgLSBPRkZJQ0lBTCBFTlRSWSBGT1JNIC0gU0FNUExFKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxMCAwMDAwMCBuIAowMDAwMDAwMDYwIDAwMDAwIG4gCjAwMDAwMDAxNTcgMDAwMDAgbiAKMDAwMDAwMDI2MiAwMDAwMCBuIAowMDAwMDAwMzUwIDAwMDAwIG4gCnRyYWlsZXIKICA8PCAvU2l6ZSA2CiAgICAgL1Jvb3QgMSAwIFIKICA+PgpzdGFydHhyZWYKNDg5CiUlRU9GCg==',
    fileSize: '0.4 MB',
    uploadDate: '2026-02-15'
  }
];
