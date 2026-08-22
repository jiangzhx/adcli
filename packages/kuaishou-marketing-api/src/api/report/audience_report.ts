// Generated from github.com/bububa/kwai-marketing-api/api/report/audience_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AudienceReportRequest, AudienceReportRequestInit, ReportResponse } from "../../model/report";

export async function audienceReport(client: SDKClient, accessToken: string, req: AudienceReportRequest | AudienceReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof AudienceReportRequest ? req : new AudienceReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { audienceReport as AudienceReport };
