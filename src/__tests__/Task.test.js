import { render, screen } from "@testing-library/react";
import Task from "../components/Task/Task";
import renderWithProviders from "../setupTests";
import userEvent from "@testing-library/user-event";

describe("Given a Task function", () => {
  describe("When rendered", () => {
    test("Then it should display a li element", async () => {
      const task = { name: "test", done: "false" };

      renderWithProviders(<Task task={task} />);

      const element = await screen.findByRole("listitem");

      expect(element).toHaveClass("list-item");
    });
  });

  describe("When receives a function and gets clicked on its X", () => {
    test("Then it should call that function", () => {
      const task = { id: 1, name: "test", done: "false" };
      const dispatch = jest.fn();

      render(<Task task={task} actionOnClick={dispatch} />);

      const element = screen.getByRole("link", { name: /x/i });
      userEvent.click(element);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
