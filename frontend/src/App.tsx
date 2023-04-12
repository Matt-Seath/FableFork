import React, { Fragment, useState } from "react";
import Button from "./components/Button";
import { FaFire } from "react-icons/fa";
import SignupForm from "./components/Forms/SignupForm";
import StoryForm from "./components/Forms/StoryForm";
import { StoryParams } from "./common/types";

const App = () => {
  const [storyParams, setStoryParams] = useState<StoryParams>({
    fork: "The Matrix",
    genre: "adventure",
    perspective: "firstPerson",
  });

  const handleOnSelect = (name: string) => {
    console.log({ name });
  };

  return (
    <div>
      <Button
        name="FireIcon"
        icon={<FaFire size="28" />}
        onSelect={handleOnSelect}
      />
      <SignupForm />
      <StoryForm fork={storyParams.fork} />
    </div>
  );
};

export default App;
