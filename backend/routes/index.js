import express from "express";
import { formsRoute } from "./formRoute.js";

const router = express.Router();

router.use("/form", formsRoute);

export { router as routes };
