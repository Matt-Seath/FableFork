export const genres = ["Comedy", "Romance", "Fantasy", "Horror"]
export const roles = ["Antagonist", "Deuteragonist", "Hero", "Love Interest"]
export const perspectives = ["1st Person", "3rd Person"]
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
  "The ability to communicate with cats, but they only speak in riddles",
  "The power to make any hat you wear instantly become a top hat",
  "The ability to turn invisible, but only when no one is looking",
  "The power to make anyone you touch instantly fall asleep",
  "The ability to read people's thoughts, but only when they're thinking about cheese",
  "The power to control the weather, but only in a 1-foot radius around you",
  "The ability to teleport to the nearest bathroom",
  "The power to make plants grow at an accelerated rate, but they all turn into cacti",
  "The ability to communicate with ghosts, but they're all just really bad at conversation",
  "The power to make people's hair grow at an alarming rate",
  "The ability to create a duplicate of yourself, but they have opposite personalities",
  "The power to make anyone within earshot start singing show tunes",
  "The ability to summon a giant hamster to do your bidding",
  "The power to make people forget what they were saying mid-sentence",
  "The ability to speak any language, but only in a thick Scottish accent",
  "The power to turn invisible, but only while doing a handstand",
  "The ability to turn any object into a rubber duck",
  "The power to make anyone within a 5-foot radius hiccup uncontrollably",
  "The ability to control all electronic devices with your mind, but only when you're wearing a propeller hat",
  "The power to summon a swarm of bees to do your bidding",
  "The ability to talk to animals, but they all sound like Gilbert Gottfried",
  "The power to make anyone within a 10-foot radius sneeze uncontrollably",
  "The ability to turn invisible, but only while humming the theme song to 'Cheers'"
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