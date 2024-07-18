import { ExceptionDetails } from "../types";
import BaseException from "./base-exception";

class BadRequestException extends BaseException {
  constructor(ex: ExceptionDetails) {
    const { message, error } = ex;
    const ex_msg = message || "Bad Request";

    super({ message: ex_msg, code: 400, error });
  }
}

export default BadRequestException;
