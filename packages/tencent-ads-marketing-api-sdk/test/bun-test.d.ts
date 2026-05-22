declare module "bun:test" {
  export const describe: (name: string, fn: () => void) => void;
  export const test: (name: string, fn: () => void | Promise<void>) => void;
  export const expect: (actual: unknown) => {
    toBe(expected: unknown): void;
    toBeTruthy(): void;
    toBeUndefined(): void;
    toContain(expected: string): void;
    not: {
      toContain(expected: string): void;
    };
    toEqual(expected: unknown): void;
    toMatchObject(expected: unknown): void;
    toHaveLength(expected: number): void;
    toBeInstanceOf(expected: unknown): void;
    rejects: {
      toBeInstanceOf(expected: unknown): Promise<void>;
    };
  };
}
