import { deleteTaskThunk } from "../redux/thunks/taskThunks";

describe("Given a deleteTaskThunk inner function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch", async () => {
      const dispatch = jest.fn();
      const thunkFunction = deleteTaskThunk(1);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
