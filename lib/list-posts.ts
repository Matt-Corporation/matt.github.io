import { readdir } from "fs/promises";
import path from "path";

export async function listPosts() {
  try {
    const newsDir = path.join(process.cwd(), "app", "news");
    const files = (await readdir(newsDir)).filter((e) => !e.includes("."));
    return files;
  } catch (err) {
    return [];
  }
}
