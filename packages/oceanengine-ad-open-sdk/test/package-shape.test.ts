import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "bun:test";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("oceanengine package shape", () => {
  test("declares a standalone SDK package entrypoint", () => {
    const pkg = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));

    expect(pkg.name).toBe("@jiangzhx/oceanengine-ad-open-sdk");
    expect(pkg.type).toBe("module");
    expect(pkg.exports["."].import).toBe("./src/index.ts");
    expect(pkg.exports["."].types).toBe("./src/index.ts");
    expect(pkg.exports["./apis"].import).toBe("./src/apis.ts");
    expect(pkg.exports["./models"].import).toBe("./src/models.ts");
    expect(pkg.files).toEqual([
      "src",
      "README.md",
    ]);
    expect(pkg.scripts.typecheck).toBe("tsc -p tsconfig.json --noEmit");
    expect(pkg.scripts.test).toBe("bun test test/*.test.ts");
    expect(pkg.scripts.generate).toBeUndefined();
  });
});
