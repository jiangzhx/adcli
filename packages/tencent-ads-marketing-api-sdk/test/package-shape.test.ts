import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "bun:test";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("tencent ads package shape", () => {
  test("declares a standalone SDK package entrypoint", () => {
    const pkg = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));

    expect(pkg.name).toBe("@jiangzhx/tencent-ads-marketing-api-sdk");
    expect(pkg.version).toBe("1.7.84-port.1");
    expect(pkg.type).toBe("module");
    expect(pkg.exports["."].import).toBe("./dist/index.js");
    expect(pkg.exports["."].types).toBe("./dist/index.d.ts");
    expect(pkg.exports["./apis"].import).toBe("./dist/apis.js");
    expect(pkg.exports["./models"].types).toBe("./dist/models.d.ts");
    expect(pkg.files).toEqual(["dist", "README.md"]);
    expect(pkg.scripts.typecheck).toBe("tsc -p tsconfig.json --noEmit");
    expect(pkg.scripts.test).toBe("bun test test/*.test.ts");
    expect(pkg.scripts.build).toBe("bun scripts/build.ts");
    expect(pkg.scripts.prepack).toBe("bun run build");
    expect(pkg.scripts.generate).toBeUndefined();
  });
});
