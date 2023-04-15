import React, { useState } from "react";
import { StoryParams } from "./common/types";
import RadioGroup from "./components/Forms/RadioGroup";
import { storyline, genres, perspectives, submit } from "./common/types";
import axios from "axios";

const App = () => {
  const [storyParams, setStoryParams] = useState<StoryParams>({
    storyline: "",
    genre: "",
    perspective: "",
  });
  const [story, setStory] = useState("");

  const handleClick = (param: string, choice: string) => {
    switch (param) {
      case "fork":
        setStoryParams({
          ...storyParams,
          storyline: choice,
        });
        break;
      case "genre":
        setStoryParams({
          ...storyParams,
          genre: choice,
        });
        break;
      case "perspective":
        setStoryParams({
          ...storyParams,
          perspective: choice,
        });
        break;
    }
    console.log(storyParams);
  };

  const fetchData = async (input: string) => {
    const orgId: string = import.meta.env.VITE_ORG_ID;
    const apiKey: string = import.meta.env.VITE_API_KEY;
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `${input}`,
        model: "text-davinci-003",
        max_tokens: 200,
        temperature: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(response.data);
    return response.data.choices[0].text;
  };

  async function handleSubmit() {
    const query: string = `Write a ${storyParams.genre} story based on ${storyParams.storyline},
      in ${storyParams.perspective} perspective. `;
    console.log(query);
    try {
      const story = await fetchData(query);
      setStory(story);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <RadioGroup
        handleClick={handleClick}
        heading="Story Type"
        items={storyline}
        section="fork"
        follows="initial"
      />
      <RadioGroup
        handleClick={handleClick}
        heading="Genre"
        items={genres}
        section="genre"
        follows={storyParams.storyline}
      />
      <RadioGroup
        handleClick={handleClick}
        heading="Perspective"
        items={perspectives}
        section="perspective"
        follows={storyParams.genre}
      />
      <RadioGroup
        handleClick={handleSubmit}
        heading=""
        items={submit}
        section="submit"
        follows={storyParams.perspective}
      />
      {story && <p>{story}</p>}
    </div>
  );
};

export default App;
