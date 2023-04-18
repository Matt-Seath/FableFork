import { Dispatch, SetStateAction, useState } from "react";
import { inputFields } from "../../common/types";

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
  const [input, setInput] = useState("");
  return (
    <>
      <li
        className={
          selectedIndex === index ? "radio-button-active" : "radio-button"
        }
        key={index}
        onClick={() => {
          setSelectedIndex(index);
          if (!inputFields.includes(children)) {
            onSelectItem(section, children);
          }
        }}
      >
        {children}
      </li>
      {selectedIndex === index && inputFields.includes(children) && (
        <input
          className="radio-button-input"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSelectItem(section, input);
            }
          }}
          type="text"
          id="other"
          placeholder={`Type custom ${section} here:`}
        />
      )}
    </>
  );
};

export default RadioButton;
