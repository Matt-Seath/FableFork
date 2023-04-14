export const storyType = ["Fork Existing", "Create New"]
export const perspectives = ["1st Person", "3rd Person"]
export const genres = ["Comedy", "Romance", "Fantasy", "Horror"]
export const roles = ["Antagonist", "Deuteragonist", "Hero", "Love Interest"]
export const specials = [
  "The ability to make any food taste like pizza",
  "The power to teleport but only to places you've never been to before",
  "The ability to turn invisible but only for 3 seconds at a time",
  "The power to talk to plants, but they're all really bad listeners",
  "The ability to predict the next song on the radio with 100% accuracy",
  "The power to make anyone within a 10-foot radius dance uncontrollably",
  "The ability to turn into a chair, but only once a day",
  "The power to control traffic lights, but only on Sundays",
  "The ability to instantly learn any language, but only for 5 minutes at a time",
  "The power to summon a flock of seagulls at will",
  "The ability to make people sneeze whenever you want",
  "The power to turn any object into a banana",
  "The power to make any hat you wear instantly become a top hat",
  "The ability to create a duplicate of yourself, but they have opposite personalities",
  "The power to make anyone within earshot start singing show tunes",
  "The ability to summon a giant hamster to do your bidding",
  "The power to make people forget what they were saying mid-sentence",
  "The ability to turn any object into a rubber duck",
  "The ability to control all electronic devices with your mind, but only when you're wearing a propeller hat",
  "The power to summon a swarm of bees to do your bidding",
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
  fork?: string;
  genre?: string;
  perspective?: string;
  characters?: Character[];
}

export interface StoryFormProps {
  storyParams: StoryParams;
}