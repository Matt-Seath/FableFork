import { Dispatch, SetStateAction, useRef } from "react";
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
  const ref = useRef<HTMLInputElement>(null);
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
      {selectedIndex === index && inputFields.includes(children) && (
        <input
          onChange={(event) => {
            if (ref.current !== null) onSelectItem(section, ref.current.value);
          }}
          ref={ref}
          type="text"
          id="other"
          placeholder={`Type custom ${section} here:`}
        />
      )}
    </>
  );
};

export default RadioButton;
