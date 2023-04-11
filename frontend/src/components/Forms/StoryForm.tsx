import React, { useState } from "react";
import { z } from "zod";

interface Stats {
  random: boolean;
  luck: number;
  strength: number;
  charisma: number;
  intelligence: number;
  dexterity: number;
}

interface Character {
  mainCharacter: boolean;
  role: string;
  name: string;
  age: number;
  special: string;
  stats: Stats;
}

interface StoryParams {
  genre: string;
  perspective: string;
  characters: Character[];
}

const StoryForm = () => {
  const [storyParams, setStoryParams] = useState<StoryParams>({
    genre: "adventure",
    perspective: "firstPerson",
    characters: []
    });

  console.log(storyParams);
  return <div>{storyParams.perspective}</div>;
};

export default StoryForm;
