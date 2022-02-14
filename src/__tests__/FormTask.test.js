import { render, screen } from "@testing-library/react";
import FormTask from "../components/FormTask/FormTask";

describe("Given a FormTask function", () => {
  describe("When rendered", () => {
    test("Then it should display a button element", () => {
      render(<FormTask />);

      const element = screen.getByRole("button");

      expect(element).toBeInTheDocument();
    });
  });
});
