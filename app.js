import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as routes from "./quiz_app/routes/index.js";

const PORT = process.env.EXPRESS_PORT || 3000;

const app = express();
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "quiz_app", "views"));
app.use(express.static(path.join(__dirname, "quiz_app", "static")));

app.get("/", routes.index);
app.get("/quiz", routes.quiz);
app.post("/quiz-result", routes.quizResult);

app.listen(PORT, () => {
  console.log("Server is live!");
});
