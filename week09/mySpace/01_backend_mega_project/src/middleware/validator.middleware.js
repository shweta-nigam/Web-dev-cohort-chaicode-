import {validationResult} from "express-validator";

import { ApiError } from "../utils/api-errors";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedError = [];
  errors.array().map((err) =>
    extractedError.push({
      [err.path]: err.msg,
    })
  );

  throw new ApiError(422, "Received data is not valid" , extractedError)
};
