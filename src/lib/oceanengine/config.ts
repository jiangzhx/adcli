import { chmod, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

import envPaths from "env-paths";

type OceanEngineConfigOptions = {
  configDir?: string;
};

type OceanEngineConfig = {
  access_token?: string;
};

export type OceanEngineConfigInfo = {
  configPath: string;
};

export function getOceanEngineConfigInfo(options: OceanEngineConfigOptions = {}): OceanEngineConfigInfo {
  const configDir = options.configDir ?? envPaths("adcli", { suffix: "" }).cache;
  return {
    configPath: path.join(configDir, "oceanengine.json"),
  };
}

export async function saveOceanEngineAccessToken(token: string, options: OceanEngineConfigOptions = {}): Promise<OceanEngineConfigInfo> {
  const trimmed = token.trim();
  if (!trimmed) {
    throw new Error("missing OceanEngine token");
  }

  const configInfo = getOceanEngineConfigInfo(options);
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

export async function loadOceanEngineAccessToken(options: OceanEngineConfigOptions = {}): Promise<string | undefined> {
  const configInfo = getOceanEngineConfigInfo(options);
  let config: OceanEngineConfig;

  try {
    config = JSON.parse(await readFile(configInfo.configPath, "utf8")) as OceanEngineConfig;
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
