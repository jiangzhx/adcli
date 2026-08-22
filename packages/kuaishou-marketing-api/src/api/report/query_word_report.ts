// Generated from github.com/bububa/kwai-marketing-api/api/report/query_word_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { QueryWordReportRequest, QueryWordReportRequestInit, ReportResponse } from "../../model/report";

export async function queryWordReport(client: SDKClient, accessToken: string, req: QueryWordReportRequest | QueryWordReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof QueryWordReportRequest ? req : new QueryWordReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { queryWordReport as QueryWordReport };
