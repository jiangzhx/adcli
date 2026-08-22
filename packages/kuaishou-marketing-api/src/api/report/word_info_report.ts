// Generated from github.com/bububa/kwai-marketing-api/api/report/word_info_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { WordInfoReportRequest, WordInfoReportRequestInit, ReportResponse } from "../../model/report";

export async function wordInfoReport(client: SDKClient, accessToken: string, req: WordInfoReportRequest | WordInfoReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof WordInfoReportRequest ? req : new WordInfoReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { wordInfoReport as WordInfoReport };
