import { Router } from "https://deno.land/x/oak/mod.ts";
import { defaultResponse, getUsers } from "./controller.ts";

const router = new Router();
router.get("/", defaultResponse);
router.get("/users", getUsers);

export default router;
