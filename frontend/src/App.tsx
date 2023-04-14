import React, { useState } from "react";
import { StoryParams } from "./common/types";
import RadioGroup from "./components/Forms/RadioGroup";
import { storyType, genres, perspectives, roles } from "./common/types";

const App = () => {
  const [storyParams, setStoryParams] = useState<StoryParams>({
    fork: "The Matrix",
    genre: "adventure",
    perspective: "firstPerson",
  });

  const handleClick = (choice: string) => {
    console.log(choice);
  };

  return (
    <div>
      <RadioGroup
        handleClick={handleClick}
        heading="Story Type"
        items={storyType}
        section="fork"
      />
      <RadioGroup
        handleClick={handleClick}
        heading="Genre"
        items={genres}
        section="genre"
      />
      <RadioGroup
        handleClick={handleClick}
        heading="Perspective"
        items={perspectives}
        section="perspective"
      />
      <RadioGroup
        handleClick={handleClick}
        heading="Roles"
        items={roles}
        section="role"
      />
    </div>
  );
};

export default App;
