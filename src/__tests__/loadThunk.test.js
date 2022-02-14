import loadThunk from "../redux/thunks/loadThunk";

describe("Given a loadThunk function", () => {
  describe("When it receives a function", () => {
    test("Then it should call that function", async () => {
      const dispatch = jest.fn();
      const tasks = [
        { id: 1, name: "Comprar", done: false },
        { id: 2, name: "Lavar ropa", done: false },
      ];

      await loadThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
