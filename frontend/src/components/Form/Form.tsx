import React from "react";

interface FormProps {
  name: string;
  type: string;
}

const Form = ({ name, type }: FormProps) => {
  return (
    <form>
      <div>
        <label htmlFor={name}>{name}</label>
        <input id={name} type={type} />
      </div>
    </form>
  );
};

export default Form;
