/// <reference types="node" />
declare module "libreoffice-convert" {
  function convert(
    document: Buffer,
    format: string,
    filter: string | undefined,
    isRunWithSudo: boolean,
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
  ): void;
  function convertWithOptions(
    document: Buffer,
    format: string,
    filter: string | undefined,
    isRunWithSudo: boolean,
    options: {
      tmpOptions?: Record<string | number | symbol, unknown>;
      asyncOptions?: { times?: number; interval?: number };
      sofficeBinaryPaths?: string[];
    },
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
  ): void;
}
