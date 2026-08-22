// Generated from github.com/bububa/kwai-marketing-api/api/report/material_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { MaterialReportRequest, MaterialReportRequestInit, ReportResponse } from "../../model/report";

export async function materialReport(client: SDKClient, accessToken: string, req: MaterialReportRequest | MaterialReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof MaterialReportRequest ? req : new MaterialReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { materialReport as MaterialReport };
