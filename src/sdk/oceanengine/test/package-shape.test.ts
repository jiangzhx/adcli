import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "bun:test";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("oceanengine package shape", () => {
  test("declares a standalone SDK package entrypoint", () => {
    const pkg = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));

    expect(pkg.name).toBe("@jiangzhx/oceanengine-sdk");
    expect(pkg.type).toBe("module");
    expect(pkg.exports["."].import).toBe("./src/index.ts");
    expect(pkg.exports["."].types).toBe("./src/index.ts");
    expect(pkg.exports["./generated/apis"].import).toBe("./src/generated/apis.ts");
    expect(pkg.exports["./generated/models"].import).toBe("./src/generated/models.ts");
    expect(pkg.files).toEqual([
      "src/index.ts",
      "src/runtime",
      "src/generated",
      "README.md",
      "PORTING.md",
    ]);
    expect(pkg.scripts.typecheck).toBe("tsc -p tsconfig.json --noEmit");
    expect(pkg.scripts.test).toBe("bun test test/*.test.ts");
  });
});
