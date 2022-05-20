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

  // NOTE: one best accessibility practice is to enable the user navigate in the options using keyboards.
  // I would need more time to do this.
  return (
    <ul className="dropdown-list" aria-label="List options">
      {options.map((option) => (
        <li key={option.value}>
          <button
            type="button"
            onClick={() => onSelect({ ...option, highlight: undefined })}
            // NOTE: it's dangerous to do this without first sanitizing the received data and is not a production ready code.
            // One options is use the lodash unescape eg. { __html: _.unescape(data) }
            dangerouslySetInnerHTML={{
              __html: option.highlight ?? option.label,
            }}
          />
        </li>
      ))}
    </ul>
  );
}
