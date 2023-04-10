import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
}

const ButtonIcon = ({ icon }: Props) => {
  return <div className="button-icon">{icon}</div>;
};

export default ButtonIcon;
