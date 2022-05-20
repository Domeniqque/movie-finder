import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders movie search link", () => {
  render(<App />);
  const linkElement = screen.getByText(/movie search/i);
  expect(linkElement).toBeInTheDocument();
});
