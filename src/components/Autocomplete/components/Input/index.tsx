import React from "react";
import { delay } from "../../../../utils/delay";
import "./styles.css";

export interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, onChange }, ref) => {
    const timeOutRef = React.useRef<NodeJS.Timeout>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timeOutRef.current);

      timeOutRef.current = delay(() => {
        onChange(e.target.value);
      }, 60);
    };

    return (
      <div className="input-container">
        <input
          ref={ref}
          type="search"
          name="autocomplete"
          onChange={handleChange}
          aria-label={placeholder}
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
    );
  }
);
