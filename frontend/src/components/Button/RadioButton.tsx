import React, { ReactNode } from "react";
import ButtonIcon from "./ButtonIcon";

interface Props {
  group: string;
  children: ChildNode;
  onSelect: (name: string) => void;
}

const RadioButton = ({ group, onSelect }: Props) => {
  return (
    <div
      onClick={() => {
        onSelect();
      }}
    >
    </div>
  );
};

export default RadioButton;
