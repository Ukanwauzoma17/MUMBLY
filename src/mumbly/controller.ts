import "dotenv/config";
import { Request, Response } from "express";
import express from "express";
import { v2 as cloudinary } from "cloudinary";
import BadRequestException from "../utils/exceptions/bad-request.exception";
import { mumbly } from "../mumbly-ai/mumbly";


const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = async (req: Request, res: Response) => {
  const file = req.file;

  if (!file) {
    throw new BadRequestException({
      message: "No file uploaded",
    });
  }

  const result = await cloudinary.uploader.upload(file.path, {
    resource_type: "auto",
  });
const url= result.secure_url
const mumblyResponse=  await mumbly( file.path);
res.status(200).json({mumblyResponse,url})
};

export default router;
