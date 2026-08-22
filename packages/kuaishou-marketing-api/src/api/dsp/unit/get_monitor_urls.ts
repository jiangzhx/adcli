// Generated from github.com/bububa/kwai-marketing-api/api/dsp/unit/get_monitor_urls.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { GetMonitorURLsRequest, GetMonitorURLsRequestInit, UnitMonitorURL } from "../../../model/dsp/unit";

export async function getMonitorURLs(client: SDKClient, accessToken: string, req: GetMonitorURLsRequest | GetMonitorURLsRequestInit, signal?: AbortSignal): Promise<UnitMonitorURL[]> {
  const request = req instanceof GetMonitorURLsRequest ? req : new GetMonitorURLsRequest(req);
  const resp = await client.post<{ unit_monitor_urls?: UnitMonitorURL[] }>(accessToken, request, signal);
  return resp.unit_monitor_urls ?? [];
}

export { getMonitorURLs as GetMonitorURLs };
