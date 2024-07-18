import { uploadFile } from './../mumbly/controller';
import express, { NextFunction, Request, Response } from "express";
// import { uploadFile } from "./notes-controller";
import { upload } from "../utils/multilier";
// import { isAuthenticated } from "../middleware/auth";
import { ApiResponse } from "../utils/api-response";

const router = express.Router();

router.post(
  "",
  [ upload.single("file")],
  uploadFile
);

// Error handling middleware
router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res
    .status(400)
    .json(ApiResponse.formatErrorResponse({ message: err.message }));
});

export default router;
