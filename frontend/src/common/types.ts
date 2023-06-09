export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};

export interface GPTResponse {
  story: string;
  options?: string[];
  chosen?: string;
}

export interface Params {
  inputFields?: string[];
  plots?: string[];
  perspectives?: string[];
  roles?: string[];
  submit?: string[];
  createNew?: string[];
}

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
  twist: string;
  type: string;
  characters?: Character[];
}

export interface StoryFormProps {
  storyParams: StoryParams;
}