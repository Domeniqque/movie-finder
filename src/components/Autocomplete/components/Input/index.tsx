import React from "react";
import "./styles.css";

export interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, onChange }, ref) => {
    /**
     * NOTE: It's a good approach use a debounce here to avoid unnecessary re-renders and requests.
     * But I've decided not to implement yet because of the short time
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
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
