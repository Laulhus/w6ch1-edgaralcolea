import { screen } from "@testing-library/react";
import App from "../App";
import renderWithProviders from "../setupTests";

describe("Given an App function", () => {
  describe("When rendered", () => {
    test("Then it should render a heading with Ed's Redux ToDo", () => {
      const title = "Ed's Redux ToDo";

      renderWithProviders(<App />);
      const heading = screen.getByRole("heading", { name: title });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When invoked", () => {
    test("Then it should render a list", () => {
      renderWithProviders(<App />);
      const heading = screen.getByRole("list");

      expect(heading).toBeInTheDocument();
    });
  });
});
