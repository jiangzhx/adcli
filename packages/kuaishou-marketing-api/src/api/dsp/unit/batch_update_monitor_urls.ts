// Generated from github.com/bububa/kwai-marketing-api/api/dsp/unit/batch_update_monitor_urls.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { BatchUpdateMonitorURLsRequest, BatchUpdateMonitorURLsRequestInit, UnitMonitorURL } from "../../../model/dsp/unit";

export async function batchUpdateMonitorURLs(client: SDKClient, accessToken: string, req: BatchUpdateMonitorURLsRequest | BatchUpdateMonitorURLsRequestInit, signal?: AbortSignal): Promise<UnitMonitorURL[]> {
  const request = req instanceof BatchUpdateMonitorURLsRequest ? req : new BatchUpdateMonitorURLsRequest(req);
  const resp = await client.post<{ unit_monitor_urls?: UnitMonitorURL[] }>(accessToken, request, signal);
  return resp.unit_monitor_urls ?? [];
}

export { batchUpdateMonitorURLs as BatchUpdateMonitorURLs };
