import express from "express";
import cors from "cors";
import { routes } from "./routes/index.js";
import { convertToApiError, handleError } from "./middlewares/errorHandling.js";

const app = express();
const port = 8000;

app.use(cors());

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
