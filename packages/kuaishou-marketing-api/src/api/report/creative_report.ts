// Generated from github.com/bububa/kwai-marketing-api/api/report/creative_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { CreativeReportRequest, CreativeReportRequestInit, ReportResponse } from "../../model/report";

export async function creativeReport(client: SDKClient, accessToken: string, req: CreativeReportRequest | CreativeReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof CreativeReportRequest ? req : new CreativeReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { creativeReport as CreativeReport };
