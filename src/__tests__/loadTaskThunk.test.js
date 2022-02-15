import { loadTaskThunk } from "../redux/thunks/taskThunks";

describe("Given a loadThunk inner function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch", async () => {
      const dispatch = jest.fn();

      await loadTaskThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
