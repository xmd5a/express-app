import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { usersRouter } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("api/users", usersRouter);

app.get("api/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
