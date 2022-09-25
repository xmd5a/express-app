import express from "express";
import { addUser, getUsers } from "../services";

const usersRouter = express.Router();

/* GET users. */
usersRouter.get("/", async (req, res, next) => {
  try {
    res.json(await getUsers());
  } catch (err: any) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* POST user */
usersRouter.post("/", async (req, res, next) => {
  try {
    res.json(await addUser(req.body));
  } catch (err: any) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
});

export { usersRouter };
