import React from "react";
import "./styles.css";

export interface InputProps {
  id: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export function Input({ id, placeholder, onChange }: InputProps) {
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
        type="search"
        name="autocomplete"
        id={id}
        onChange={handleChange}
        aria-label={placeholder}
        placeholder={placeholder}
      />
    </div>
  );
}