export const storyline = ["Give me Ideas", "Surprise Me", "Custom"]
export const perspectives = ["1st Person", "3rd Person", "Default"]
export const genres = ["Default", "Comedy", "Horror", "Romance", "Other"]
export const roles = ["Antagonist", "Love Interest", "Other"]
export const submit = ["Submit"]
export const inputFields = ["Create new", "Other", "Custom"]

export interface Stats {
  random?: boolean;
  luck?: number;
  strength?: number;
  charisma?: number;
  intelligence?: number;
  dexterity?: number;
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
  plot: string;
  genre: string;
  perspective: string;
  characters?: Character[];
}

export interface StoryFormProps {
  storyParams: StoryParams;
}