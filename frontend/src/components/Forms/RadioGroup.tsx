import { useState } from "react";
import RadioButton from "../Buttons/RadioButton";

interface RadioGroupProps {
  section: string;
  items: string[];
  heading: string;
  subHeading?: string;
  follows?: string;
  handleClick: (param: string, choice: string) => void;
}

const RadioGroup = ({
  subHeading,
  section,
  items,
  follows,
  heading,
  handleClick,
}: RadioGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      {follows && (
        <>
          <h3 className="text-center text-5xl m-8">{heading}</h3>
          {subHeading && (
            <p className="text-center text-lg m-2">{subHeading}</p>
          )}
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
      )}
    </>
  );
};

export default RadioGroup;
