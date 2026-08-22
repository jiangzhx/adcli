// Generated from github.com/bububa/kwai-marketing-api/api/file/ad_app_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdAppListRequest, AdAppListRequestInit, AdAppListResponse } from "../../model/file";

export async function adAppList(client: SDKClient, accessToken: string, req: AdAppListRequest | AdAppListRequestInit, signal?: AbortSignal): Promise<AdAppListResponse> {
  const request = req instanceof AdAppListRequest ? req : new AdAppListRequest(req);
  return client.getOnBody<AdAppListResponse>(accessToken, request, signal);
}

export { adAppList as AdAppList };
