import React, { ReactNode } from "react";
import ButtonIcon from "./ButtonIcon";

interface Props {
  name: string;
  icon: ReactNode;
  onSelect: (name: string) => void;
}

const Button = ({ name, icon, onSelect }: Props) => {
  return (
    <div
      onClick={() => {
        onSelect(name);
      }}
    >
      <ButtonIcon icon={icon} />
    </div>
  );
};

export default Button;
