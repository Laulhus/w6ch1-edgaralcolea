import { screen } from "@testing-library/react";
import Task from "../components/Task/Task";
import renderWithProviders from "../setupTests";

describe("Given a Task function", () => {
  describe("When rendered", () => {
    test("Then it should display a li element", async () => {
      const task = { name: "test", done: "false" };

      renderWithProviders(<Task task={task} />);

      const element = await screen.findByRole("listitem");

      expect(element).toHaveClass("list-item");
    });
  });
});
