import loadThunk from "../redux/thunks/loadThunk";

describe("Given a loadThunk function", () => {
  describe("When it receives a function", () => {
    test("Then it should call that function", async () => {
      const dispatch = jest.fn();

      await loadThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
