import React from "react";
import { Input } from "./components/Input";
import "./styles.css";

export interface AutocompleteProps {
  label: string;
}

export function Autocomplete({ label }: AutocompleteProps) {
  const [text, setText] = React.useState("");

  const inputId = React.useId();

  const handleChange = () => {
    setText(text);
  };

  return (
    <div className="autocomplete-container">
      <Input id={inputId} onChange={handleChange} label={label} />
    </div>
  );
}
