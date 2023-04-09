import React, { Fragment } from "react";
import Button from "./components/Button";
import { FaFire } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <Button icon={<FaFire size="28" />} />
    </div>
  );
};

export default App;
