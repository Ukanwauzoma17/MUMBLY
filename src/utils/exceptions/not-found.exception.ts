import { ExceptionDetails } from "../types";
import BaseException from "./base-exception";

class NotFoundException extends BaseException {
  constructor(ex: ExceptionDetails) {
    const { message, error } = ex;
    const ex_msg = message || "Sorry the requested resource could not Found";
    super({ message: ex_msg, code: 404, error });
  }
}

export default NotFoundException;
