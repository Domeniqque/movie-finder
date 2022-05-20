import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropdownOption } from "../components/Dropdown";
import { Autocomplete } from "../index";

// @ts-ignore
window.requestIdleCallback = (callback) => {
  // @ts-ignore
  callback();
};

const mockValues: DropdownOption[] = [
  {
    label: "Element 1",
    value: "element-1",
  },
  {
    label: "Element 2",
    value: "element-2",
  },
  {
    label: "Element 3",
    value: "element-3",
  },
];

describe("Autocomplete", () => {
  test("should render with empty input and enable type", async () => {
    const onSelect = jest.fn();
    const onSearchAsync = jest
      .fn()
      .mockImplementation(
        (text: string) =>
          new Promise((resolve) =>
            resolve(
              mockValues.filter((el) => el.label.match(new RegExp(text, "ig")))
            )
          )
      );

    render(
      <Autocomplete
        placeholder="Teste"
        onSearchAsync={onSearchAsync}
        onSelect={onSelect}
      />
    );

    // should start empty
    expect(screen.getByRole("searchbox")).toHaveValue("");

    // should type text and call onSearchAsync
    userEvent.type(screen.getByRole("searchbox"), "element 3");
    expect(screen.getByRole("searchbox")).toHaveValue("element 3");
    expect(await screen.findAllByRole("listitem")).toHaveLength(1);
    expect(await screen.findByText("Element 3")).toBeDefined();
    expect(onSearchAsync).toBeCalled();

    // should select the element and put the value on the input
    userEvent.click(await screen.findByText("Element 3"));
    expect(onSelect).toHaveBeenCalledWith(mockValues[2]);
    expect(screen.getByRole("searchbox")).toHaveValue("Element 3");
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);

    // should clear the input and hidden the list
    userEvent.clear(screen.getByRole("searchbox"));
    expect(screen.getByRole("searchbox")).toHaveValue("");
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
