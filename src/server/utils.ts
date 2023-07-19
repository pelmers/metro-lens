import path from "path";

export const repoRoot = path.resolve(__filename, "..", "..");
export const r = (relative: string) => path.resolve(repoRoot, relative);
