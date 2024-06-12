import express from "express";
import cors from "cors";
import { routes } from "./routes/index.js";
import { convertToApiError, handleError } from "./middlewares/errorHandling.js";
import path from "path";
import { fileURLToPath } from "url";

// Use import.meta.url to derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 8000;

app.use(cors());

// serve static assets in production
app.use(express.static(path.resolve(__dirname, "build")));

// body parser
app.use(express.json());

// router
app.use("/api", routes);

// Error Handling
app.use(convertToApiError);
app.use((err, req, res, next) => {
  handleError(err, res);
});

// Server running
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in the Server, The error is ${err}`);
  }
  console.log(`Server Running Fine on Port : ${port}`);
});
