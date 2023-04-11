import React, { useState } from "react";
import { z } from "zod";
import { StoryParams } from "../../common/types";

const StoryForm = () => {
  const [storyParams, setStoryParams] = useState<StoryParams>({
    genre: "adventure",
    perspective: "firstPerson",
    characters: [],
  });

  console.log(storyParams);
  return <div>{storyParams.perspective}</div>;
};

export default StoryForm;
