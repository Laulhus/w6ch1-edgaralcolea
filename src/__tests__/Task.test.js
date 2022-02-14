import { render, screen } from "@testing-library/react";
import Task from "../components/Task/Task";

describe("Given a Task function", () => {
  describe("When rendered", () => {
    test("Then it should display a li element", () => {
      render(<Task />);

      const element = screen.getByRole("listitem");
    });
  });
});
