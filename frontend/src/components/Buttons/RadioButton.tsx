import { Dispatch, SetStateAction, useRef, useState } from "react";
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
  const [disabled, setDisabled] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      {section !== "submit" ? (
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
              ref={ref}
              className="radio-button-input"
              onChange={(event) => {
                setInput(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onSelectItem(section, input);
                  ref.current!.blur();
                }
              }}
              type="text"
              id="other"
              placeholder={`Type custom ${section} here and hit Enter:`}
            />
          )}
        </>
      ) : (
        <button
          onClick={() => {
            setDisabled(true);
            onSelectItem(section, children);
          }}
          className={!disabled ? "submit-button" : "submit-button-disabled"}
          disabled={disabled}
        >
          {!disabled ? children : "Generating Story.."}
        </button>
      )}
    </>
  );
};

export default RadioButton;
