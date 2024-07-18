import "dotenv/config";
import dotenv from "dotenv";
import fs from "fs";
import { AcoustID } from "acoustid";

dotenv.config();

export const extractMetadataFromMP3 = async (filePath: string) => {
  const acoustid = new AcoustID({
    key: process.env.ACOUSTID_API_KEY,
  });

  const audioData = fs.readFileSync(filePath);

  try {
    const result = await acoustid.identify(audioData);

    if (!result.recordings.length) {
      console.log("No audio metadata found.");
      return;
    }

    const recording = result.recordings[0];
    const title = recording.title;
    const artist = recording.artists[0].name;

    console.log("Title:", title);
    console.log("Artist:", artist);
  } catch (error) {
    console.error("Error:", error);
  }
};