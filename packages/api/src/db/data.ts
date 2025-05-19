import { Player, Stadium } from "types";

export const CARD_DATA = [
  {
    id: 1,
    title: "Matches",
    route: "/matches",
    description: "Live scores, kick-off times, and full match breakdowns—updated every minute for all major leagues.",
    imageUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Teams",
    route: "/teams",
    description: "Season form, tactics boards, win-loss charts, and head-to-head comparisons for every club.",
    imageUrl: "https://images.unsplash.com/photo-1625990637351-ee0e5e9ba5e5?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Player Details",
    route: "/players",
    description: "Bios, heat-maps, xG, goals, assists, injuries, and career milestones—all in one profile.",
    imageUrl: "https://images.unsplash.com/photo-1598040837609-6b1a25192ff6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "Stadiums",
    route: "/stadiums",
    description: "Capacities, pitch sizes, grass types, and atmospheric stats for every football venue worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1534095199036-ba4fd1eed616?auto=format&fit=crop&w=400&q=80",
  },
];

export const TEAMS = [
  {
    id: 1,
    name: "Manchester United FC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/72px-Manchester_United_FC_crest.svg.png",
    stats: {
      played: 28,
      won: 19,
      drawn: 6,
      lost: 3,
      points: 63,
    },
  },
  {
    id: 2,
    name: "Bayern Munich",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/72px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png",
    stats: {
      played: 28,
      won: 20,
      drawn: 4,
      lost: 4,
      points: 64,
    },
  },
  {
    id: 3,
    name: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/72px-Real_Madrid_CF.svg.png",
    stats: {
      played: 20,
      won: 10,
      drawn: 4,
      lost: 6,
      points: 54,
    },
  },
  {
    id: 4,
    name: "Liverpool FC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/72px-Liverpool_FC.svg.png",
    stats: {
      played: 20,
      won: 10,
      drawn: 4,
      lost: 6,
      points: 54,
    },
  },
  {
    id: 5,
    name: "FC Barcelona",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/72px-FC_Barcelona_%28crest%29.svg.png",
    stats: {
      played: 20,
      won: 10,
      drawn: 4,
      lost: 6,
      points: 54,
    },
  },
  {
    id: 5,
    name: "Arsenal FC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/72px-Arsenal_FC.svg.png",
    stats: {
      played: 20,
      won: 10,
      drawn: 4,
      lost: 6,
      points: 54,
    },
  },
];

export const MATCHES = [
  {
    id: "1",
    date: "2024-03-20T15:00:00Z",
    status: "LIVE" as const,
    location: "Old Trafford",
    homeTeam: {
      name: "Manchester United FC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/72px-Manchester_United_FC_crest.svg.png",
    },
    awayTeam: {
      name: "Bayern Munich",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/72px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png",
    },
    score: {
      home: 2,
      away: 1,
    },
  },
  {
    id: "2",
    date: "2024-03-21T19:45:00Z",
    status: "SCHEDULED" as const,
    location: "Emirates Stadium",
    homeTeam: {
      name: "Real Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/72px-Real_Madrid_CF.svg.png",
    },
    awayTeam: {
      name: "Liverpool FC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/72px-Liverpool_FC.svg.png",
    },
    score: {
      home: 0,
      away: 0,
    },
  },
  {
    id: "3",
    date: "2024-03-29T19:45:00Z",
    status: "CANCELLED" as const,
    location: "Emirates Stadium",
    homeTeam: {
      name: "FC Barcelona",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/72px-FC_Barcelona_%28crest%29.svg.png",
    },
    awayTeam: {
      name: "Arsenal FC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/72px-Arsenal_FC.svg.png",
    },
    score: {
      home: 0,
      away: 0,
    },
  },
  {
    id: "4",
    date: "2024-03-19T19:45:00Z",
    status: "COMPLETED" as const,
    location: "Emirates Stadium",
    homeTeam: {
      name: "Manchester United FC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/72px-Manchester_United_FC_crest.svg.png",
    },
    awayTeam: {
      name: "Arsenal FC",
      logo: "https://example.com/chelsea-logo.png",
    },
    score: {
      home: 1,
      away: 3,
    },
  },
];

export const PLAYERS = [
  {
    id: 1,
    name: "Bruno Fernandes",
    team: "Manchester United FC",
    position: "Attacking Midfielder",
    number: 8,
    stats: {
      goals: 14,
      assists: 11,
      appearances: 46,
    },
  },
  {
    id: 2,
    name: "Harry Kane",
    team: "FC Bayern Munich",
    position: "Centre‑Forward",
    number: 9,
    stats: {
      goals: 41,
      assists: 9,
      appearances: 44,
    },
  },
  {
    id: 3,
    name: "Jude Bellingham",
    team: "Real Madrid CF",
    position: "Central Midfielder",
    number: 5,
    stats: {
      goals: 23,
      assists: 12,
      appearances: 45,
    },
  },
  {
    id: 4,
    name: "Mohamed Salah",
    team: "Liverpool FC",
    position: "Right Winger",
    number: 11,
    stats: {
      goals: 27,
      assists: 13,
      appearances: 42,
    },
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    team: "FC Barcelona",
    position: "Centre‑Forward",
    number: 9,
    stats: {
      goals: 25,
      assists: 6,
      appearances: 40,
    },
  },
  {
    id: 6,
    name: "Bukayo Saka",
    team: "Arsenal FC",
    position: "Right Winger",
    number: 7,
    stats: {
      goals: 18,
      assists: 15,
      appearances: 48,
    },
  },
];

export const STADIUMS = [
  {
    id: 1,
    name: "Santiago Bernabéu",
    city: "Madrid, Spain",
    capacity: 85000,
    homeTeam: "Real Madrid CF",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg",
  },
  {
    id: 2,
    name: "Old Trafford",
    city: "Manchester, England",
    capacity: 74310,
    homeTeam: "Manchester United FC",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Manchester_United_Panorama_%288051523746%29.jpg",
  },
  {
    id: 3,
    name: "Allianz Arena",
    city: "Munich, Germany",
    capacity: 75024,
    homeTeam: "FC Bayern Munich",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Allianz_Arena_%28Bayern_Munich%29.jpg/1000px-Allianz_Arena_%28Bayern_Munich%29.jpg",
  },
  {
    id: 4,
    name: "Camp Nou (Spotify Camp Nou)",
    city: "Barcelona, Spain",
    capacity: 99354,
    homeTeam: "FC Barcelona",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Camp_Nou_aerial.jpg",
  },
  {
    id: 5,
    name: "Anfield",
    city: "Liverpool, England",
    capacity: 61000,
    homeTeam: "Liverpool FC",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg",
  },
  {
    id: 6,
    name: "Emirates Stadium",
    city: "London, England",
    capacity: 60704,
    homeTeam: "Arsenal FC",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/London_Emirates_Stadium_arsenal.jpg",
  },
];
