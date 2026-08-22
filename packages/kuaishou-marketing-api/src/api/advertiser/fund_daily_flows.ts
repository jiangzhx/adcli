// Generated from github.com/bububa/kwai-marketing-api/api/advertiser/fund_daily_flows.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { FundDailyFlowsRequest, FundDailyFlowsRequestInit, FundDailyFlowsResponse } from "../../model/advertiser";

export async function fundDailyFlows(client: SDKClient, accessToken: string, req: FundDailyFlowsRequest | FundDailyFlowsRequestInit, signal?: AbortSignal): Promise<FundDailyFlowsResponse> {
  const request = req instanceof FundDailyFlowsRequest ? req : new FundDailyFlowsRequest(req);
  return client.post<FundDailyFlowsResponse>(accessToken, request, signal);
}

export { fundDailyFlows as FundDailyFlows };
