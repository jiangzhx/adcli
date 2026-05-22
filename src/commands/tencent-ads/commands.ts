import {
  ApiClient,
  AdgroupsApi,
  AdvertiserApi,
  DynamicCreativesApi,
  OrganizationAccountRelationApi,
  parseJsonPreservingLargeIntegers,
  type FetchLike,
} from "@jiangzhx/tencent-ads-marketing-api-sdk/api/v3";
import { loadTencentAdsAccessToken, saveTencentAdsAccessToken } from "./config";

export type TencentAdsCommandOptions = {
  fetch?: FetchLike;
  env?: Record<string, string | undefined>;
  configDir?: string;
};

type TencentAdsArgs = {
  resource?: string;
  action?: string;
  flags: Record<string, string | boolean>;
};

export async function runTencentAdsCommand(argv: string[], options: TencentAdsCommandOptions = {}) {
  const args = parseTencentAdsArgs(argv);

  if (args.resource === "auth") {
    const token = args.action;
    if (!token) {
      throw new Error("missing Tencent Ads token");
    }
    const configInfo = await saveTencentAdsAccessToken(token, { configDir: options.configDir });
    return {
      ok: true,
      config_path: configInfo.configPath,
    };
  }

  const token = await resolveAccessToken(args, options);
  const apiClient = new ApiClient({ fetch: options.fetch }).setAccessToken(token);

  if (args.resource === "advertiser" && args.action === "list") {
    return new OrganizationAccountRelationApi(apiClient).get({
      accountId: getOptionalId(args, "account-id") ?? getOptionalId(args, "advertiser-id"),
      fields: parseCsv(args.flags.fields) ?? ["account_id", "corporation_name", "is_bid", "is_mp", "is_adx", "comment_list"],
      page: parseNumberFlag(args.flags.page) ?? 1,
      pageSize: parseNumberFlag(args.flags["page-size"]) ?? 100,
      paginationMode: getOptionalString(args.flags["pagination-mode"]) ?? "PAGINATION_MODE_NORMAL",
    });
  }

  if (args.resource === "advertiser" && args.action === "get") {
    return new AdvertiserApi(apiClient).get({
      accountId: getRequiredAccountId(args),
      fields: parseCsv(args.flags.fields) ?? ["account_id", "account_name"],
      filtering: parseJsonFlag(args.flags.filtering),
      page: parseNumberFlag(args.flags.page),
      pageSize: parseNumberFlag(args.flags["page-size"]) ?? 20,
      paginationMode: getOptionalString(args.flags["pagination-mode"]) ?? "PAGINATION_MODE_NORMAL",
    });
  }

  if (args.resource === "adgroup" && args.action === "list") {
    return new AdgroupsApi(apiClient).get({
      accountId: getRequiredAccountId(args),
      filtering: parseJsonFlag(args.flags.filtering),
      fields: parseCsv(args.flags.fields),
      page: parseNumberFlag(args.flags.page),
      pageSize: parseNumberFlag(args.flags["page-size"]),
    });
  }

  if (args.resource === "dynamic-creative" && args.action === "list") {
    return new DynamicCreativesApi(apiClient).get({
      accountId: getRequiredAccountId(args),
      filtering: parseJsonFlag(args.flags.filtering),
      fields: parseCsv(args.flags.fields),
      page: parseNumberFlag(args.flags.page),
      pageSize: parseNumberFlag(args.flags["page-size"]),
    });
  }

  throw new Error(`unknown tencent-ads command: ${[args.resource, args.action].filter(Boolean).join(" ")}`);
}

export function formatTencentAdsOutput(payload: unknown, json: boolean, argv: string[] = []) {
  if (json) {
    return JSON.stringify(payload, null, 2);
  }
  if (isTencentAdsErrorPayload(payload)) {
    return JSON.stringify(payload, null, 2);
  }
  if (argv[0] === "advertiser" && argv[1] === "list") {
    return formatEntityList(payload, "account_id", ["account_id", "id"], ["account_name", "corporation_name", "name"]);
  }
  if (argv[0] === "advertiser" && argv[1] === "get") {
    return formatEntityList(payload, "account_id", ["account_id", "id"], ["account_name", "corporation_name", "name"]);
  }
  if (argv[0] === "adgroup" && argv[1] === "list") {
    return formatEntityList(payload, "adgroup_id", ["adgroup_id", "id"], ["adgroup_name", "name"]);
  }
  if (argv[0] === "dynamic-creative" && argv[1] === "list") {
    return formatEntityList(
      payload,
      "dynamic_creative_id",
      ["dynamic_creative_id", "id"],
      ["dynamic_creative_name", "name"],
    );
  }
  return JSON.stringify(payload, null, 2);
}

export function formatTencentAdsError(error: unknown): string | undefined {
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

export function parseTencentAdsArgs(argv: string[]): TencentAdsArgs {
  const args: TencentAdsArgs = {
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

async function resolveAccessToken(args: TencentAdsArgs, options: TencentAdsCommandOptions): Promise<string> {
  const explicitToken = getOptionalString(args.flags["access-token"]);
  if (explicitToken) {
    return explicitToken;
  }

  const env = options.env ?? process.env;
  const envToken = getOptionalString(env.TENCENT_ADS_ACCESS_TOKEN);
  if (envToken) {
    return envToken;
  }

  const savedToken = await loadTencentAdsAccessToken({ configDir: options.configDir });
  if (savedToken) {
    return savedToken;
  }

  throw new Error("missing --access-token; run adcli tencent-ads auth <token> or set TENCENT_ADS_ACCESS_TOKEN");
}

function getRequiredAccountId(args: TencentAdsArgs) {
  return getRequiredId(args, "account-id", "advertiser-id");
}

function getRequiredString(args: TencentAdsArgs, flag: string, alias?: string) {
  const value = getOptionalString(args.flags[flag]) ?? (alias ? getOptionalString(args.flags[alias]) : undefined);
  if (!value) {
    throw new Error(alias ? `missing --${flag} or --${alias}` : `missing --${flag}`);
  }
  return value;
}

function getOptionalString(value: string | boolean | undefined) {
  if (typeof value !== "string" || !value) {
    return undefined;
  }
  return value;
}

function getOptionalId(args: TencentAdsArgs, flag: string) {
  const value = getOptionalString(args.flags[flag]);
  if (!value) {
    return undefined;
  }
  if (!/^\d+$/.test(value)) {
    throw new Error(`--${flag} must be an integer id`);
  }
  return value;
}

function getRequiredId(args: TencentAdsArgs, flag: string, alias?: string) {
  const value = getRequiredString(args, flag, alias);
  if (!/^\d+$/.test(value)) {
    throw new Error(alias ? `--${flag} or --${alias} must be an integer id` : `--${flag} must be an integer id`);
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

function isTencentAdsErrorPayload(payload: unknown): boolean {
  return isRecord(payload) && typeof payload.code === "number" && payload.code !== 0;
}
