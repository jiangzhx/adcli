// Generated from github.com/bububa/kwai-marketing-api/api/report/program_creative_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ProgramCreativeReportRequest, ProgramCreativeReportRequestInit, ReportResponse } from "../../model/report";

export async function programCreativeReport(client: SDKClient, accessToken: string, req: ProgramCreativeReportRequest | ProgramCreativeReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof ProgramCreativeReportRequest ? req : new ProgramCreativeReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { programCreativeReport as ProgramCreativeReport };
