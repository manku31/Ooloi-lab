import express from "express";
import { formDataController } from "../controllers/formDataController.js";

const router = express.Router();

router.get("/formdata", formDataController.getFormData);

export { router as formsRoute };
