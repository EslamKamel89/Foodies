import { slugify } from "./slug";

import fs from "node:fs";
export async function saveFile(file: File): Promise<string> {
  const extension = file.name.split(".").pop();
  const slug = slugify(file.name);
  const filename = `${slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await file.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });
  return `/images/${filename}`;
}
