// Generated from github.com/bububa/kwai-marketing-api/api/report/campaign_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { CampaignReportRequest, CampaignReportRequestInit, ReportResponse } from "../../model/report";

export async function campaignReport(client: SDKClient, accessToken: string, req: CampaignReportRequest | CampaignReportRequestInit, signal?: AbortSignal): Promise<ReportResponse> {
  const request = req instanceof CampaignReportRequest ? req : new CampaignReportRequest(req);
  return client.post<ReportResponse>(accessToken, request, signal);
}

export { campaignReport as CampaignReport };
