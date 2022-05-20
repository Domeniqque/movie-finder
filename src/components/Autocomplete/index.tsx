import React from "react";
import { Dropdown, DropdownOption } from "./components/Dropdown";
import { Input } from "./components/Input";
import "./styles.css";

export interface AutocompleteProps {
  label: string;
}

export function Autocomplete({ label }: AutocompleteProps) {
  const [text, setText] = React.useState("");
  const [options, setOptions] = React.useState<DropdownOption<string>[]>([
    {
      label: "Element 1",
      value: "element-1",
    },
    {
      label: "Element 2",
      value: "element-2",
    },
  ]);

  const inputId = React.useId();

  const handleChange = () => {
    setText(text);
  };

  return (
    <div className="autocomplete-container">
      <Input id={inputId} onChange={handleChange} placeholder={label} />

      <Dropdown options={options} />
    </div>
  );
}
