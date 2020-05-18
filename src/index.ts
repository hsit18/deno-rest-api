import { Application } from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std@v0.50.0/flags/mod.ts";
import router from "./router.ts";

const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${port} ...`);
await app.listen(`0.0.0.0:${port}`);
