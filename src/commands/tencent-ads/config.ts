import { chmod, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

import envPaths from "env-paths";

type TencentAdsConfigOptions = {
  configDir?: string;
};

type TencentAdsConfig = {
  access_token?: string;
};

export type TencentAdsConfigInfo = {
  configPath: string;
};

export function getTencentAdsConfigInfo(options: TencentAdsConfigOptions = {}): TencentAdsConfigInfo {
  const configDir = options.configDir ?? envPaths("adcli", { suffix: "" }).cache;
  return {
    configPath: path.join(configDir, "tencent-ads.json"),
  };
}

export async function saveTencentAdsAccessToken(token: string, options: TencentAdsConfigOptions = {}): Promise<TencentAdsConfigInfo> {
  const trimmed = token.trim();
  if (!trimmed) {
    throw new Error("missing Tencent Ads token");
  }

  const configInfo = getTencentAdsConfigInfo(options);
  await mkdir(path.dirname(configInfo.configPath), { recursive: true });
  const tempPath = `${configInfo.configPath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${JSON.stringify({ access_token: trimmed })}\n`, {
    encoding: "utf8",
    mode: 0o600,
  });
  await rename(tempPath, configInfo.configPath);
  await chmod(configInfo.configPath, 0o600);
  return configInfo;
}

export async function loadTencentAdsAccessToken(options: TencentAdsConfigOptions = {}): Promise<string | undefined> {
  const configInfo = getTencentAdsConfigInfo(options);
  let config: TencentAdsConfig;

  try {
    config = JSON.parse(await readFile(configInfo.configPath, "utf8")) as TencentAdsConfig;
  } catch (error) {
    if (isNotFoundError(error)) {
      return undefined;
    }
    throw error;
  }

  if (typeof config.access_token !== "string" || !config.access_token.trim()) {
    return undefined;
  }
  return config.access_token.trim();
}

function isNotFoundError(error: unknown): boolean {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}
