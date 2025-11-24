import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  seed: {
    run: "node prisma/seed.js"
  }
});
