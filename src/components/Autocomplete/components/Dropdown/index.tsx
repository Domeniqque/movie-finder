import "./styles.css";

type OptionValue = number | string;

export type DropdownOption<T extends OptionValue> = {
  label: string;
  value: T;
};

export interface DropdownProps<T extends OptionValue> {
  options: DropdownOption<T>[];
}

export function Dropdown<T extends OptionValue>({ options }: DropdownProps<T>) {
  if (options.length === 0) {
    return null;
  }

  return (
    <ul className="dropdown-list" aria-label="List options">
      {options.map((option) => (
        <li key={option.value}>{option.label}</li>
      ))}
    </ul>
  );
}
