import React, { ReactNode } from "react";
import ButtonIcon from "./ButtonIcon";

interface Props {
  icon: ReactNode;
}

const Button = ({ icon }: Props) => {
  return (
    <div>
      <ButtonIcon icon={ icon } />
    </div>
  );
};

export default Button;
