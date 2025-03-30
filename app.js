import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as routes from "./src/routes/index.js";

const app = express();
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, "src", "static")));

app.get("/", routes.index);
app.get("/quiz", routes.quiz);

app.listen(3000, () => {
  console.log("Server is live!");
});
