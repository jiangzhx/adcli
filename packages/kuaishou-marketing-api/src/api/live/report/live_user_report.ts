// Generated from github.com/bububa/kwai-marketing-api/api/live/report/live_user_report.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ListLiveUserReportRequest, ListLiveUserReportRequestInit, ListLiveReportResponse } from "../../../model/live/report";

export async function listLiveUserReport(client: SDKClient, accessToken: string, req: ListLiveUserReportRequest | ListLiveUserReportRequestInit, signal?: AbortSignal): Promise<ListLiveReportResponse> {
  const request = req instanceof ListLiveUserReportRequest ? req : new ListLiveUserReportRequest(req);
  return client.post<ListLiveReportResponse>(accessToken, request, signal);
}

export { listLiveUserReport as ListLiveUserReport };
