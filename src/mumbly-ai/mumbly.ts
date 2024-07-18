import "dotenv/config";
import dotenv from "dotenv";
import fs from "fs";
import OpenAI from "openai";
import { v2 as cloudinary } from "cloudinary";
import { encode } from "base64-arraybuffer";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export async function mumbly(filePath: string) {
  let prompt = `I am a user and when I attach the file, I want you to return to me the name of the song and the artist that sang it.`;

  const fileData = fs.readFileSync(filePath); 
  const fileBase64 = encode(fileData); 
  const completion = await openai.chat.completions.create(
    {
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: prompt,
        },
        {
          role: "user",
          content: `Here is the attached MP3 file: ${fileBase64}`,
        },
      ],
      max_tokens: 600,
      temperature: 0.1,
    },
    {
      headers: {
        Authorization: `Bearer ${openai.apiKey}`,
      },
    }
  );
 
  const response = completion.choices[0].message.content;
  if (!response) return;

  const result = await cloudinary.uploader.upload(filePath, {
    resource_type:"auto", 
    folder: "audio",
  });

  console.log("Song Information:", response);
  console.log("Cloudinary URL:", result.secure_url);
}
