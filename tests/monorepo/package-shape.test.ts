import { readFileSync } from "node:fs";
import { describe, expect, test } from "bun:test";

describe("monorepo package shape", () => {
  test("registers SDK packages as root workspaces", () => {
    const pkg = JSON.parse(readFileSync("package.json", "utf8"));

    expect(pkg.workspaces).toEqual(["packages/*"]);
    expect(pkg.dependencies["@jiangzhx/oceanengine-ad-open-sdk"]).toBe("1.1.87-port.3");
    expect(pkg.devDependencies["@jiangzhx/oceanengine-ad-open-sdk"]).toBeUndefined();
    expect(pkg.scripts["sdk:oceanengine:test"]).toBe("bun run --cwd packages/oceanengine-ad-open-sdk test");
    expect(pkg.scripts["sdk:oceanengine:typecheck"]).toBe("bun run --cwd packages/oceanengine-ad-open-sdk typecheck");
    expect(pkg.scripts["sdk:tencent-ads:test"]).toBe("bun run --cwd packages/tencent-ads-marketing-api-sdk test");
    expect(pkg.scripts["sdk:tencent-ads:typecheck"]).toBe("bun run --cwd packages/tencent-ads-marketing-api-sdk typecheck");
    expect(pkg.scripts["sdk:test"]).toBe("bun run sdk:oceanengine:test && bun run sdk:tencent-ads:test");
    expect(pkg.scripts["sdk:typecheck"]).toBe("bun run sdk:oceanengine:typecheck && bun run sdk:tencent-ads:typecheck");
    expect(pkg.scripts["codegen:oceanengine:test"]).toBe("bun run --cwd packages/codegen test:oceanengine");
    expect(pkg.scripts["codegen:oceanengine:generate"]).toBe("bun run --cwd packages/codegen generate:oceanengine");
    expect(pkg.scripts["codegen:oceanengine:generate:go"]).toBe("bun run --cwd packages/codegen generate:oceanengine:go");
    expect(pkg.scripts["codegen:tencent-ads:test"]).toBe("bun run --cwd packages/codegen test:tencent-ads");
    expect(pkg.scripts["codegen:tencent-ads:generate"]).toBe("bun run --cwd packages/codegen generate:tencent-ads");
    expect(pkg.scripts["codegen:tencent-ads:generate:go"]).toBe("bun run --cwd packages/codegen generate:tencent-ads:go");
    expect(pkg.scripts["codegen:oceanengine:phase-a"]).toBeUndefined();
    expect(pkg.scripts["codegen:test"]).toBe("bun run --cwd packages/codegen test");
    expect(pkg.scripts["codegen:typecheck"]).toBe("bun run --cwd packages/codegen typecheck");
    expect(pkg.scripts["test:all"]).toBe("bun run test && bun run sdk:test && bun run codegen:test");
    expect(pkg.scripts["typecheck:all"]).toBe("bun run typecheck && bun run sdk:typecheck && bun run codegen:typecheck");
  });

  test("keeps codegen as a private internal workspace package", () => {
    const pkg = JSON.parse(readFileSync("packages/codegen/package.json", "utf8"));

    expect(pkg.name).toBe("@jiangzhx/adcli-codegen");
    expect(pkg.private).toBe(true);
    expect(pkg.scripts["generate:oceanengine"]).toBe("bun run src/oceanengine/generate-from-go-sdk.ts");
    expect(pkg.scripts["phase-a:oceanengine"]).toBeUndefined();
    expect(pkg.scripts["codex:oceanengine:port-apis"]).toBeUndefined();
    expect(pkg.scripts["test:oceanengine"]).toBe("bun test test/oceanengine/*.test.ts");
    expect(pkg.scripts["test:tencent-ads"]).toBe("bun test test/tencent-ads/*.test.ts");
  });
});
