import { NextFunction, Request, Response } from "express";
import BaseException from "./exceptions/base-exception";
import { ApiResponse } from "./api-response";

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof BaseException) {
    return res
      .status(error.code)
      .send(
        ApiResponse.formatErrorResponse({ error, message: error.message! })
      );
  }

  // console.log

  console.error({
    message: "An error occured.",
    error,
    stack: error.stack,
    errorType: typeof error,
  });
  res.status(500).send({
    error: "Internal Server Error",
    success: false,
    message: "An error occurred while processing your request",
  });
};

export default errorHandler;
