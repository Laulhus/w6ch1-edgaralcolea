import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Given an App function", () => {
  describe("When rendered", () => {
    test("Then it should render a heading with Ed's Redux ToDo", () => {
      const title = "Ed's Redux ToDo";

      render(<App />);
      const heading = screen.getByRole("heading", { name: title });

      expect(heading).toBeInTheDocument();
    });
  });
});
