import { readFileSync } from "node:fs";
import { describe, expect, test } from "bun:test";

describe("monorepo package shape", () => {
  test("registers SDK packages as root workspaces", () => {
    const pkg = JSON.parse(readFileSync("package.json", "utf8"));

    expect(pkg.workspaces).toEqual(["src/sdk/*"]);
    expect(pkg.scripts["sdk:oceanengine:test"]).toBe("bun run --cwd src/sdk/oceanengine test");
    expect(pkg.scripts["sdk:oceanengine:typecheck"]).toBe("bun run --cwd src/sdk/oceanengine typecheck");
    expect(pkg.scripts["sdk:test"]).toBe("bun run sdk:oceanengine:test");
    expect(pkg.scripts["sdk:typecheck"]).toBe("bun run sdk:oceanengine:typecheck");
  });
});
