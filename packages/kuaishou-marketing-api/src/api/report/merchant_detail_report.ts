// Generated from github.com/bububa/kwai-marketing-api/api/report/merchant_detail_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { MerchantDetailReportRequest, MerchantDetailReportRequestInit, MerchantDetailReportResponse } from "../../model/report";

export async function merchantDetailReport(client: SDKClient, accessToken: string, req: MerchantDetailReportRequest | MerchantDetailReportRequestInit, signal?: AbortSignal): Promise<MerchantDetailReportResponse> {
  const request = req instanceof MerchantDetailReportRequest ? req : new MerchantDetailReportRequest(req);
  return client.post<MerchantDetailReportResponse>(accessToken, request, signal);
}

export { merchantDetailReport as MerchantDetailReport };
