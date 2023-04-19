export const storyline = ["Give me Ideas", "Surprise Me", "Custom"]
export const perspectives = ["1st Person", "3rd Person", "Default"]
export const genres = ["Default", "Comedy", "Horror", "Romance", "Other"]
export const roles = ["Antagonist", "Love Interest", "Other"]
export const submit = ["Submit"]
export const inputFields = ["Create new", "Other", "Custom"]
export const traits = [
  "Only speaks in lame, cheesy one-liners",
  "Is morbidly obese and struggles to do anything",
  "Is horny",
  "Has an army of midgets",
  "Invents bizarre conspiracy theories",
  "Has a strange fascination with pickles",
  "Thinks they're a ninja",
  "Carries a rubber chicken everywhere",
  "Can't resist dad jokes",
  "Is a self-proclaimed psychic",
  "Refuses to use modern technology",
  "Thinks they're a pirate",
  "Is a terrible ventriloquist",
  "Is overly dramatic",
  "Has a bizarre obsession with cats",
  "Dresses like a superhero",
  "Obsessed with llamas",
  "Thinks they can speak to animals",
  "Only tells knock-knock jokes",
  "Has a pet rock",
  "Is an amateur stand-up comedian",
  "Carries a briefcase full of rubber bands",
  "Uses puns excessively",
  "Has a collection of useless inventions",
  "Constantly quotes movies",
  "Always misuses idioms",
  "Has a sock puppet",
  "Obsessed with selfies",
  "Collects rubber duckies",
  "Has a strange obsession with mimes",
  "Thinks they are a wizard",
  "Is a terrible beatboxer",
  "Wears a fake mustache",
  "Obsessed with conspiracy theories",
  "Wears a monocle",
  "Is a terrible banjo player",
  "Is a terrible kazoo player",
  "Wears a top hat",
  "Thinks they are a talk show host",
  "Is a terrible mime",
  "Has a constant case of diarrhea",
  "Cannot stop picking their nose, no matter where they are",
  "Can only communicate through interpretive dance",
  "Has a shrine dedicated to their favorite conspiracy theory",
  "Has an unnatural fear of fruit",
  "Has a pet squirrel that they trained to steal from the neighbors",
  "Believes that the moon landing was fake and that aliens built the pyramids",
  "Thinks that all problems can be solved with a good game of rock-paper-scissors",
  "Has a collection of over 100 rubber ducks that they use to stage reenactments of famous battles",
  "Believes that the earth is flat and that all scientists are part of a global conspiracy to cover it up",
  "Thinks that all vegetables are evil and must be destroyed",
  "Refuses to wear anything that does not have a picture of a unicorn on it",
  "Has a pet elephant that they let roam freely in their house",
  "Thinks that all animals are out to get them",
  "Believes that the government is controlling their thoughts through subliminal messages in their tap water",
  "Has an imaginary twin that they have to consult with before making any major decisions",
  "Believes that the world is going to end tomorrow and that they must prepare accordingly",
]


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
  storyline: string;
  genre: string;
  perspective: string;
  characters?: Character[];
}

export interface StoryFormProps {
  storyParams: StoryParams;
}