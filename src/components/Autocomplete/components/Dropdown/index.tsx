import "./styles.css";

export type DropdownOptionValue = string;

export type DropdownOption = {
  label: string;
  value: DropdownOptionValue;
  highlight?: string;
};

export interface DropdownProps {
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
}

export function Dropdown({ options, onSelect }: DropdownProps) {
  if (options.length === 0) {
    return null;
  }

  return (
    <ul className="dropdown-list" aria-label="List options">
      {options.map((option) => (
        <li
          key={option.value}
          role="button"
          onClick={() => onSelect(option)}
          // NOTE: it's dangerous to do this without first sanitizing the received data
          // One options is use the lodash unescape eg. { __html: _.unescape(data) }
          dangerouslySetInnerHTML={{
            __html: option.highlight ?? option.label,
          }}
        />
      ))}
    </ul>
  );
}
