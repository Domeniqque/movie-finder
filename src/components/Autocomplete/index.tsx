import React from "react";
import { highlighter } from "../../utils/highligher";
import { Dropdown, DropdownOption } from "./components/Dropdown";
import { Input } from "./components/Input";
import "./styles.css";

export interface AutocompleteProps {
  placeholder: string;
  onSearchAsync(text: string): Promise<DropdownOption[]>;
  onSelect: (option: DropdownOption) => void;
}

export function Autocomplete({
  placeholder,
  onSearchAsync,
  onSelect,
}: AutocompleteProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [options, setOptions] = React.useState<DropdownOption[]>([]);

  const callbackRefs = React.useRef<number>();

  const searchByInput = (text: string) => {
    if (!text.trim()) {
      return setOptions([]);
    }

    // NOTE: I'm using this function to let the browser
    // find the best time to do the searching withoult lags
    callbackRefs.current = window.requestIdleCallback(() => {
      onSearchAsync(text.trim())
        .then((data) =>
          data.map((data) => ({
            highlight: highlighter(text.trim(), data.label),
            value: data.value,
            label: data.label,
          }))
        )
        .then((data) => {
          setOptions(data);
        });
    });
  };

  const selectOption = (option: DropdownOption) => {
    if (inputRef.current) {
      inputRef.current.value = option.label;
      inputRef.current.focus();
    }

    onSelect(option);
    setOptions([]);
  };

  return (
    <div className="autocomplete-container">
      <Input
        ref={inputRef}
        onChange={searchByInput}
        placeholder={placeholder}
      />

      <Dropdown options={options} onSelect={selectOption} />
    </div>
  );
}
