import React, { ReactNode } from "react";

interface Props {
  selectedItem?: string;
  setSelectedItem?: any;
  children: string;
}

const RadioButton = ({ children, selectedItem }: Props) => {
  const handleSelect = setSelectedItem();

  return (
    <li
      onClick={handleSelect}
      className={
        selectedItem === children ? "radio-button" : "radio-button-selected"
      }
    >
      {children}
    </li>
  );
};

export default RadioButton;
