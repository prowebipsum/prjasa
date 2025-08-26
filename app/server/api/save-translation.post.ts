import { promises as fs } from "fs";
import { join } from "path";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    lang: string;
    key: string;
    value: string;
  }>(event);

  const localeFile = join(process.cwd(), "locales", `${body.lang}.json`);

  try {
    // baca file json existing
    const content = JSON.parse(await fs.readFile(localeFile, "utf-8"));

    // tambahkan / update key
    content[body.key] = body.value;

    // tulis balik file
    await fs.writeFile(localeFile, JSON.stringify(content, null, 2), "utf-8");

    return { success: true };
  } catch (err) {
    console.error(err);
    throw createError({ statusCode: 500, message: "Failed to save translation" });
  }
});
