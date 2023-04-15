import { Dispatch, SetStateAction } from "react";
import { StoryParams } from "../../common/types";

interface Props {
  section: string;
  index: number;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  onSelectItem: (param: string, choice: string) => void;
  children: string;
}

const RadioButton = ({
  section,
  index,
  children,
  selectedIndex,
  setSelectedIndex,
  onSelectItem,
}: Props) => {
  return (
    <>
      <li
        className={
          selectedIndex === index ? "radio-button-active" : "radio-button"
        }
        key={index}
        onClick={() => {
          setSelectedIndex(index);
          onSelectItem(section, children);
        }}
      >
        {children}
      </li>
      {selectedIndex === index &&
        (children === "Other" || children === "Create New") && (
          <input
            type="text"
            id="other"
            placeholder={`Type custom ${section} here:`}
          />
        )}
    </>
  );
};

export default RadioButton;
