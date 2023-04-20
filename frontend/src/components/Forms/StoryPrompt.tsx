import { useState } from "react";
import RadioButton from "../Buttons/RadioButton";

interface StoryPromptProps {
  section: string;
  items: string[];
  heading?: string;
  subHeading?: string;
  displaysWhen?: string | boolean;
  handleClick: (param: string, choice: string) => void;
}

const StoryPrompt = ({
  subHeading,
  section,
  items,
  displaysWhen,
  heading,
  handleClick,
}: StoryPromptProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      {displaysWhen && (
        <>
          <h3 className="text-center text-lime-500 text-4xl font-extrabold mt-32 mb-8">
            {heading}
          </h3>
          {subHeading && (
            <p className="text-center text-slate-500 italic text-lg m-4">
              {subHeading}
            </p>
          )}
          {items.length === 0 && <p>No item found</p>}
          <ul className="flex flex-wrap justify-center">
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

export default StoryPrompt;
