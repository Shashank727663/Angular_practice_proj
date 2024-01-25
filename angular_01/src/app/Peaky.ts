// models.ts

export interface Episode {
    episode_number: number;
    title: string;
    description: string;
  }
  
  export interface Season {
    season_number: number;
    episodes: Episode[];
  }
  
  export interface ApiResponse {
    seasons: Season[];
  }
  