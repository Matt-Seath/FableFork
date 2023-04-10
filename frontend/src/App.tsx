import React, { Fragment } from "react";
import Button from "./components/Button";
import { FaFire } from "react-icons/fa";
import SignupForm from "./components/Forms/SignupForm";

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
    </div>
  );
};

export default App;
