import multer from "multer";
import { UnsupportedFileTypeException } from "../utils/exceptions/unsupported-filetype.exception";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 8000000 },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = [".mp3"];

    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(new UnsupportedFileTypeException("Invalid file type"));
    }
  },
});