import { useEffect, useRef, useState } from "react";
import { StoryParams } from "./common/types";
import StoryPrompt from "./components/Forms/StoryPrompt";
import Queries from "./components/Requests/queries";
import InitialRequest from "./components/Requests/InitialRequest";
import Params from "./assets/data/Params.json";

const App = () => {
  const [storyParams, setStoryParams] = useState<StoryParams>({
    plot: "",
    genre: "",
    perspective: "",
  });
  const [story, setStory] = useState("");
  const [generated, hasGenerated] = useState(false);
  const bottom = useRef<null | HTMLDivElement>(null);

  const handleClick = (param: string, choice: string) => {
    if (["plot", "genre", "perspective"].includes(param)) {
      setStoryParams({
        ...storyParams,
        [param]: choice,
      });
    }
    console.log(storyParams);
  };

  useEffect(() => bottom.current?.scrollIntoView({ behavior: "smooth" }));

  async function handleSubmit() {
    const query: string = Queries(storyParams);
    console.log(query);
    try {
      const story = await InitialRequest(query);
      setStory(story);
      hasGenerated(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handleReset = () => {
    const blank = {} as StoryParams;
    setStoryParams(blank);
    setStory("");
    hasGenerated(false);
    console.log(blank);
    console.log(storyParams);
  };

  return (
    <div className="container mx-auto px-9">
      <div className="h-36" />
      <StoryPrompt
        handleClick={handleClick}
        heading="Story Plot"
        subHeading="Define the plot of the story. You can choose your own by referening a scene from a book/movie, or just make up your own!"
        items={Params.plots}
        section="plot"
        follows="initial"
      />
      <StoryPrompt
        handleClick={handleClick}
        heading="Genre"
        subHeading="Select a genre for the story. You can opt for a different genre, or combine multiple genres by selecting 'Other' and typing them."
        items={Params.genres}
        section="genre"
        follows={storyParams.plot}
      />
      <StoryPrompt
        handleClick={handleClick}
        heading="Perspective"
        subHeading="Select the perspective the story will be written from. Are you reading as the protagonist (1st person) or as a spectator (3rd person)?"
        items={Params.perspectives}
        section="perspective"
        follows={storyParams.genre}
      />
      {!generated && (
        <StoryPrompt
          handleClick={handleSubmit}
          heading=""
          items={Params.submit}
          section="submit"
          follows={storyParams.perspective}
        />
      )}
      {story && (
        <p className="text-center text-lg mt-36 mb-4 mx-12 p-8 text-white bg-slate-800">
          {story}
        </p>
      )}
      <StoryPrompt
        handleClick={handleReset}
        heading=""
        items={Params.createNew}
        section="Create New"
        follows={generated}
      />
      <div className="h-36" />
      <div ref={bottom} />
    </div>
  );
};

export default App;
