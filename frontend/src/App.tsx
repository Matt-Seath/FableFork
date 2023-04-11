import React, { Fragment } from "react";
import Button from "./components/Button";
import { FaFire } from "react-icons/fa";
import SignupForm from "./components/Forms/SignupForm";
import StoryForm from "./components/Forms/StoryForm";

const App = () => {
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
      <StoryForm />
    </div>
  );
};

export default App;
