// Generated from github.com/bububa/kwai-marketing-api/api/report/account_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AccountReportRequest, AccountReportRequestInit, ReportResponse } from "../../model/report";

export async function accountReport(client: SDKClient, accessToken: string, req: AccountReportRequest | AccountReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof AccountReportRequest ? req : new AccountReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { accountReport as AccountReport };
