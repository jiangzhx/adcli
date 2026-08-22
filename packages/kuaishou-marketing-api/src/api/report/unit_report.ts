// Generated from github.com/bububa/kwai-marketing-api/api/report/unit_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { UnitReportRequest, UnitReportRequestInit, ReportResponse } from "../../model/report";

export async function unitReport(client: SDKClient, accessToken: string, req: UnitReportRequest | UnitReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof UnitReportRequest ? req : new UnitReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { unitReport as UnitReport };
