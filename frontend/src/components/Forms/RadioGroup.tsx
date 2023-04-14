import { useState } from "react";
import RadioButton from "../Button/RadioButton";
import { StoryParams } from "../../common/types";

interface RadioGroupProps {
  section: string;
  items: string[];
  heading: string;
  handleClick: (choice: string) => void;
}

const RadioGroup = ({
  section,
  items,
  heading,
  handleClick,
}: RadioGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h3 className="text-center text-5xl mt-10">{heading}</h3>
      {items.length === 0 && <p>No item found</p>}
      <ul>
        {items.map((item, index) => (
          <RadioButton
            section={section}
            key={index}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            onSelectItem={handleClick}
          >
            {item}
          </RadioButton>
        ))}
      </ul>
    </>
  );
};

export default RadioGroup;
