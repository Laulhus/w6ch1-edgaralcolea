import { deleteTaskThunk } from "../redux/thunks/taskThunks";

describe("Given a deleteTaskThunk inner function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch", async () => {
      const id = 1;
      const dispatch = jest.fn();

      const thunkFunction = deleteTaskThunk(id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
