import express from "express";
import { formDataController } from "../controllers/fromdataController.js";

const router = express.Router();

router.get("/formdata", formDataController.getFormData);

export { router as formsRoute };
