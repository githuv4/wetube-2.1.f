import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 3000;

function handleListener() {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => res.send("home1"));
app.get("/profile", (req, res) => res.send("profile"));

app.listen(PORT, handleListener);
