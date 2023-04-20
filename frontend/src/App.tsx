import { useEffect, useRef, useState } from "react";
import { StoryParams, GPTResponse } from "./common/types";
import StoryPrompt from "./components/Forms/StoryPrompt";
import Queries from "./components/Requests/queries";
import InitialRequest from "./components/Requests/InitialRequest";
import PromptParams from "./assets/data/PromptParams.json";
import PlotsList from "./assets/data/Plots.json";
import TwistsList from "./assets/data/Twists.json";

const App = () => {
  const [storyParams, setStoryParams] = useState<StoryParams>({
    plot: "",
    twist: "",
    type: "",
  });
  const [story, setStory] = useState<GPTResponse[]>([]);
  const [generated, hasGenerated] = useState<boolean>(false);
  const bottom = useRef<null | HTMLDivElement>(null);
  const { ignoreList, plots, twists, type, submit, createNew } = PromptParams;

  const handleClick = (param: string, choice: string) => {
    if (["plot", "twist", "type"].includes(param)) {
      setStoryParams({
        ...storyParams,
        [param]: choice,
      });
    }
    console.log(storyParams);
  };

  const handleReset = () => {
    setStoryParams({
      plot: "",
      twist: "",
      type: "",
    });
    setStory([]);
    hasGenerated(false);
  };

  async function handleSubmit(type: string, choice: string) {
    const query: string = Queries(storyParams, type, choice);
    console.log(query);

    try {
      const response: GPTResponse = await InitialRequest(query);
      setStory([...story, response]);
    } catch (error) {
      console.log(error);
    }
    hasGenerated(true);
  }

  useEffect(() => bottom.current?.scrollIntoView({ behavior: "smooth" }));

  return (
    <div className="container mx-auto px-9">
      <div className="h-36" />
      {!generated && (
        <>
          <StoryPrompt
            handleClick={handleClick}
            heading="Story Setting"
            subHeading="Define the setting/plot of the story. You can choose your own by referening a scene from a book/movie, or just make up your own!"
            items={plots}
            section="plot"
            displaysWhen={!generated}
          />
          <StoryPrompt
            handleClick={handleClick}
            items={PlotsList}
            section="plot"
            displaysWhen={
              storyParams.plot === "Give Me Ideas" ||
              PlotsList.includes(storyParams.plot)
            }
          />
          <StoryPrompt
            handleClick={handleClick}
            heading="Add a Twist"
            subHeading="Add a 'spin' to the story (See 'Give me Ideas' for inspiration). You can pick from this list, change the genre, or just make up your own!"
            items={twists}
            section="twist"
            displaysWhen={!ignoreList.includes(storyParams.plot)}
          />
          <StoryPrompt
            handleClick={handleClick}
            items={TwistsList}
            section="twist"
            displaysWhen={
              (storyParams.twist === "Give Me Ideas" ||
                TwistsList.includes(storyParams.twist)) &&
              !ignoreList.includes(storyParams.plot)
            }
          />
          <StoryPrompt
            handleClick={handleClick}
            heading="Story Type"
            subHeading="Select the type of story to be written. Do you want a standard story, or an interactive experience where you choose your own adventure?"
            items={type}
            section="type"
            displaysWhen={
              !ignoreList.includes(storyParams.twist) &&
              !ignoreList.includes(storyParams.plot)
            }
          />
          <StoryPrompt
            handleClick={handleSubmit}
            heading=""
            items={submit}
            section="submit"
            displaysWhen={
              !ignoreList.includes(storyParams.plot) &&
              !ignoreList.includes(storyParams.twist) &&
              storyParams.type
            }
          />
        </>
      )}
      {story[0] && (
        <p className="text-center text-lg mt-36 mb-4 mx-12 p-8 text-white bg-slate-800">
          {story[0].story}
        </p>
      )}
      {story[0] && story[0].options && (
        <StoryPrompt
          handleClick={handleSubmit}
          subHeading="Choose from one the following actions to proceed:"
          items={story[0].options}
          section="choices"
          displaysWhen={true}
        />
      )}
      <StoryPrompt
        handleClick={handleReset}
        heading=""
        items={createNew}
        section="Create New"
        displaysWhen={generated}
      />
      <div className="h-36" />
      <div ref={bottom} />
    </div>
  );
};

export default App;
