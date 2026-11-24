import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

fs.mkdirSync(outDir, { recursive: true });

const sourcePath = path.join(here, "entry.png");
const targetPath = path.join(outDir, "entry.png");

fs.copyFileSync(sourcePath, targetPath);
