export interface Stats {
  random: boolean;
  luck: number;
  strength: number;
  charisma: number;
  intelligence: number;
  dexterity: number;
}

export interface Character {
  mainCharacter: boolean;
  role?: string;
  name?: string;
  age?: number;
  special?: string;
  stats?: Stats;
}

export interface StoryParams {
  genre: string;
  perspective: string;
  characters?: Character[];
}