export declare const repoRoot: string;
export declare const r: (relative: string) => string;
export declare function rimraf(path: string): Promise<void>;
export declare function withTempFolder<O>(fn: (tempFolder: string) => Promise<O>): Promise<O>;
