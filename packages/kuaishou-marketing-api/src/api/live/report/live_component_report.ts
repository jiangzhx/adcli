// Generated from github.com/bububa/kwai-marketing-api/api/live/report/live_component_report.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ListLiveComponentReportRequest, ListLiveComponentReportRequestInit, ListLiveComponentReportResponse } from "../../../model/live/report";

export async function listLiveComponentReport(client: SDKClient, accessToken: string, req: ListLiveComponentReportRequest | ListLiveComponentReportRequestInit, signal?: AbortSignal): Promise<ListLiveComponentReportResponse> {
  const request = req instanceof ListLiveComponentReportRequest ? req : new ListLiveComponentReportRequest(req);
  return client.post<ListLiveComponentReportResponse>(accessToken, request, signal);
}

export { listLiveComponentReport as ListLiveComponentReport };
