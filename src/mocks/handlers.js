import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://w6ch1-edgaralcolea.herokuapp.com/tasks/",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: 1, name: "Comprar", done: false },
          { id: 2, name: "Lavar ropa", done: false },
        ])
      );
    }
  ),
];
