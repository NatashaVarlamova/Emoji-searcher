import { useState } from "react";

interface IProps {
  onChangeText: (value: string) => void;
}

export const Form = ({ onChangeText }: IProps) => {
  const [value, setValue] = useState("");

  return (
    <input
      className="input"
      value={value}
      onChange={(event) => {
        onChangeText(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};
