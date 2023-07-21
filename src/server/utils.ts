import path from "path";
import tmp from "tmp-promise";
import {promises as fs} from "fs";
import { e } from "../constants";

export const repoRoot = path.resolve(__filename, "..", "..");
export const r = (relative: string) => path.resolve(repoRoot, relative);

// Recursively delete a folder, does not throw any error
export async function rmrf(path: string): Promise<void> {
  try {
    await e(fs.rm)(path, { recursive: true, force: true });
  } finally {
  }
}

export async function withTempFolder<O>(
  fn: (tempFolder: string) => Promise<O>
): Promise<O> {
  // Create a temporary folder
  const tempDir = await tmp.dir();
  try {
    return await e(fn, {errorPrefix: `Error from temp folder ${tempDir.path}`})(tempDir.path);
  } finally {
    // Delete the temporary folder
    await rmrf(tempDir.path);
  }
}
