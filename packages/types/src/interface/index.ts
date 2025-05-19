import { MatchStatus } from "../type";

export interface CardData {
  id: number;
  route: string;
  title: string;
  description: string;
  imageUrl: string;
}
export interface Score {
  home: number;
  away: number;
}

export interface Match {
  id: string;
  date: string;
  status: MatchStatus;
  location: string;
  homeTeam: Omit<Team, "id" | "stats">;
  awayTeam: Omit<Team, "id" | "stats">;
  score?: Score;
}

export interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  number: number;
  stats: {
    goals: number;
    assists: number;
    appearances: number;
  };
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  stats: {
    played: number;
    won: number;
    drawn: number;
    lost: number;
    points: number;
  };
}

export interface Stadium {
  id: number;
  name: string;
  city: string;
  capacity: number;
  homeTeam: string;
  imageUrl: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}
