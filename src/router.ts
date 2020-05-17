import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers } from "./controller.ts";

const router = new Router();
router.get("/users", getUsers);

export default router;
