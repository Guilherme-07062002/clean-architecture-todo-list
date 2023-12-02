import express, { Router } from "express";
import setupRoutes from "./main/config/setup-routes";
import morgan from "morgan";
import path from "path";
import fs from "fs";

export interface LogEntry {
  method: string;
  endpoint: string;
  request: any;
  response: any;
  status: number;
}

export interface Env {
  URL: string;
}

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "log.json"), {
  flags: "a",
});

export const app = express();
const router: Router = express.Router();

app.use(express.json());
app.use(router);
app.use(
  morgan(
    (tokens, req, res) => {
      const logEntry: LogEntry = {
        method: tokens.method(req, res) as string,
        endpoint: tokens.url(req, res) as string,
        request: req.body,
        response: res.locals.responseBody,
        status: Number(tokens.status(req, res) as string),
      };

      if (req.headers["log-ignore"]) return;

      accessLogStream.write(JSON.stringify(logEntry) + ",\n");
      return "";
    },
    { stream: accessLogStream }
  )
);

setupRoutes(app);

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
