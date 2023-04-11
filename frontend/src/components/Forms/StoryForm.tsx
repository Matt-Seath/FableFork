import React, { useEffect, useState } from "react";
import { z } from "zod";
import { StoryParams } from "../../common/types";
import axios from "axios";

const StoryForm = () => {
  const [storyParams, setStoryParams] = useState<StoryParams>({
    genre: "adventure",
    perspective: "firstPerson",
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data[0].name));
  });

  console.log(storyParams);
  return <div>{storyParams.perspective}</div>;
};

export default StoryForm;
