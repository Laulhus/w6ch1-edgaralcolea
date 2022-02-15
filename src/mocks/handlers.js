import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "Comprar", done: false },
        { id: 2, name: "Lavar ropa", done: false },
      ])
    );
  }),

  rest.delete(`${process.env.REACT_APP_API_URL}${1}`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json([{ id: 1, name: "Comprar", done: false }])
    );
  }),
];
