import httpStatus from "http-status";
import { CONSTANTS } from "../constants/Constants.js";

const formDataController = {
  // Method to retrieve form data
  async getFormData(req, res, next) {
    try {
      res.status(httpStatus.OK).json(CONSTANTS.formData);
    } catch (error) {
      // Send a generic error message
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Failed to fetch form data. Please try again later.",
      });

      next(error);
    }
  },
};

export { formDataController };
