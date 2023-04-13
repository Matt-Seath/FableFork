import React, { ReactNode } from "react";
import ButtonIcon from "./ButtonIcon";

interface Props {
  children: string;
}

const RadioButton = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default RadioButton;
