import React, { Fragment } from "react";
import Button from "./components/Button";
import { FaFire } from "react-icons/fa";
import Form from "./components/Form";

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
      <Form name="test" type="number" />
    </div>
  );
};

export default App;
