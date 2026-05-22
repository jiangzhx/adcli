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
    expect(pkg.exports["."].import).toBe("./dist/index.js");
    expect(pkg.exports["."].types).toBe("./dist/index.d.ts");
    expect(pkg.exports["./api"].import).toBe("./dist/api/index.js");
    expect(pkg.exports["./api"].types).toBe("./dist/api/index.d.ts");
    expect(pkg.exports["./models"].import).toBe("./dist/models/index.js");
    expect(pkg.exports["./models"].types).toBe("./dist/models/index.d.ts");
    expect(pkg.exports["./config"].import).toBe("./dist/config/configuration.js");
    expect(pkg.exports["./config"].types).toBe("./dist/config/configuration.d.ts");
    expect(pkg.files).toEqual([
      "dist",
      "README.md",
    ]);
    expect(pkg.scripts.typecheck).toBe("tsc -p tsconfig.json --noEmit");
    expect(pkg.scripts.test).toBe("bun test test/*.test.ts");
    expect(pkg.scripts.build).toBe("bun scripts/build.ts");
    expect(pkg.scripts.prepack).toBe("bun run build");
    expect(pkg.scripts.generate).toBeUndefined();
  });
});
