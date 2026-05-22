import {
  ApiClient,
  Oauth2AdvertiserGetApi,
  ProjectListV30Api,
  PromotionListV30Api,
  parseJsonPreservingLargeIntegers,
  type FetchLike,
  type ProjectListV30Filtering,
  type PromotionListV30Filtering,
} from "@jiangzhx/oceanengine-ad-open-sdk";
import { loadOceanEngineAccessToken, saveOceanEngineAccessToken } from "./config";

export type OceanEngineCommandOptions = {
  fetch?: FetchLike;
  env?: Record<string, string | undefined>;
  configDir?: string;
};

type OceanEngineArgs = {
  resource?: string;
  action?: string;
  flags: Record<string, string | boolean>;
};

export async function runOceanEngineCommand(argv: string[], options: OceanEngineCommandOptions = {}) {
  const args = parseOceanEngineArgs(argv);

  if (args.resource === "auth") {
    const token = args.action;
    if (!token) {
      throw new Error("missing OceanEngine token");
    }
    const configInfo = await saveOceanEngineAccessToken(token, { configDir: options.configDir });
    return {
      ok: true,
      config_path: configInfo.configPath,
    };
  }

  const token = await resolveAccessToken(args, options);
  const apiClient = new ApiClient({ fetch: options.fetch }).setAccessToken(token);

  if (args.resource === "advertiser" && args.action === "list") {
    return new Oauth2AdvertiserGetApi(apiClient).openApiOauth2AdvertiserGetGet(token);
  }

  if (isProjectListCommand(args)) {
    const advertiserId = getRequiredId(args, "advertiser-id");
    return new ProjectListV30Api(apiClient).openApiV30ProjectListGet(
      advertiserId,
      parseCsv(args.flags.fields),
      parseJsonFlag<ProjectListV30Filtering>(args.flags.filtering) as never,
      parseNumberFlag(args.flags.page),
      parseNumberFlag(args.flags["page-size"]),
    );
  }

  if (args.resource === "promotion" && args.action === "list") {
    const advertiserId = getRequiredId(args, "advertiser-id");
    const filtering = {
      ...parseJsonFlag<PromotionListV30Filtering>(args.flags.filtering),
      ...parseProjectFilter(args.flags["project-id"]),
    };
    return new PromotionListV30Api(apiClient).openApiV30PromotionListGet(
      advertiserId,
      (Object.keys(filtering).length > 0 ? filtering : undefined) as never,
      parseCsv(args.flags.fields),
      args.flags["including-material-attributes"] as never,
      parseNumberFlag(args.flags.page),
      parseNumberFlag(args.flags["page-size"]),
      parseNumberFlag(args.flags.cursor),
      parseNumberFlag(args.flags.count),
    );
  }

  throw new Error(`unknown oceanengine command: ${[args.resource, args.action].filter(Boolean).join(" ")}`);
}

export function formatOceanEngineOutput(payload: unknown, json: boolean, argv: string[] = []) {
  if (json) {
    return JSON.stringify(payload, null, 2);
  }
  if (isOceanEngineErrorPayload(payload)) {
    return JSON.stringify(payload, null, 2);
  }
  if (argv[0] === "project" && argv[1] === "list") {
    return formatEntityList(payload, "project_id", ["project_id", "id"], ["name", "project_name"]);
  }
  if (argv[0] === "promotion" && argv[1] === "list") {
    return formatEntityList(payload, "promotion_id", ["promotion_id", "id"], ["name", "promotion_name"]);
  }
  return JSON.stringify(payload, null, 2);
}

export function formatOceanEngineError(error: unknown): string | undefined {
  if (!isRecord(error) || !("responseBody" in error)) {
    return undefined;
  }

  const responseBody = error.responseBody;
  if (responseBody == null) {
    return undefined;
  }

  if (typeof responseBody === "string") {
    return responseBody;
  }

  return JSON.stringify(responseBody, null, 2);
}

export function parseOceanEngineArgs(argv: string[]): OceanEngineArgs {
  const args: OceanEngineArgs = {
    resource: argv[0],
    action: argv[1],
    flags: {},
  };

  for (let index = 2; index < argv.length; index += 1) {
    const value = argv[index];
    if (!value?.startsWith("--")) {
      continue;
    }
    const name = value.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args.flags[name] = true;
      continue;
    }
    args.flags[name] = next;
    index += 1;
  }

  return args;
}

async function resolveAccessToken(args: OceanEngineArgs, options: OceanEngineCommandOptions): Promise<string> {
  const explicitToken = getOptionalString(args.flags["access-token"]);
  if (explicitToken) {
    return explicitToken;
  }

  const env = options.env ?? process.env;
  const envToken = getOptionalString(env.OCEANENGINE_ACCESS_TOKEN);
  if (envToken) {
    return envToken;
  }

  const savedToken = await loadOceanEngineAccessToken({ configDir: options.configDir });
  if (savedToken) {
    return savedToken;
  }

  throw new Error("missing --access-token; run adcli oceanengine auth <token> or set OCEANENGINE_ACCESS_TOKEN");
}

function getRequiredString(args: OceanEngineArgs, flag: string) {
  const value = getOptionalString(args.flags[flag]);
  if (!value) {
    throw new Error(`missing --${flag}`);
  }
  return value;
}

function getOptionalString(value: string | boolean | undefined) {
  if (typeof value !== "string" || !value) {
    return undefined;
  }
  return value;
}

function getRequiredNumber(args: OceanEngineArgs, flag: string) {
  const value = getRequiredString(args, flag);
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`--${flag} must be a number`);
  }
  return parsed;
}

function getRequiredId(args: OceanEngineArgs, flag: string) {
  const value = getRequiredString(args, flag);
  if (!/^\d+$/.test(value)) {
    throw new Error(`--${flag} must be an integer id`);
  }
  return value;
}

function parseNumberFlag(value: string | boolean | undefined) {
  if (value == null || value === true) {
    return undefined as never;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`numeric flag must be a number: ${value}`);
  }
  return parsed as never;
}

function parseCsv(value: string | boolean | undefined) {
  if (typeof value !== "string" || !value) {
    return undefined as never;
  }
  return value.split(",").map((item) => item.trim()).filter(Boolean) as never;
}

function parseJsonFlag<T>(value: string | boolean | undefined): T | undefined {
  if (typeof value !== "string" || !value) {
    return undefined;
  }
  return parseJsonPreservingLargeIntegers(value) as T;
}

function parseProjectFilter(value: string | boolean | undefined): Pick<PromotionListV30Filtering, "project_id"> {
  if (typeof value !== "string" || !value) {
    return {};
  }
  if (!/^\d+$/.test(value)) {
    throw new Error("--project-id must be an integer id");
  }
  return { project_id: value } as never;
}

function isProjectListCommand(args: OceanEngineArgs): boolean {
  return args.resource === "project" && args.action === "list";
}

function formatEntityList(payload: unknown, idHeader: string, idKeys: string[], nameKeys: string[]): string {
  const list = getPayloadList(payload);
  const header = `${idHeader}\tname`;
  if (list.length === 0) {
    return header;
  }

  return [
    header,
    ...list.map((item) => {
      const id = getRecordValue(item, idKeys);
      const name = getRecordValue(item, nameKeys);
      return `${id}\t${name}`;
    }),
  ].join("\n");
}

function getPayloadList(payload: unknown): Record<string, unknown>[] {
  if (!isRecord(payload) || !isRecord(payload.data) || !Array.isArray(payload.data.list)) {
    return [];
  }

  return payload.data.list.filter(isRecord);
}

function getRecordValue(record: Record<string, unknown>, keys: string[]): string {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }
  }
  return "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isOceanEngineErrorPayload(payload: unknown): boolean {
  return isRecord(payload) && typeof payload.code === "number" && payload.code !== 0;
}
