import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  defaultResponse,
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "./controller.ts";

const router = new Router();
router.get("/", defaultResponse);
router
  .get("/users", getUsers)
  .get("/users/:id", getUser)
  .post("/users", addUser)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);

export default router;
