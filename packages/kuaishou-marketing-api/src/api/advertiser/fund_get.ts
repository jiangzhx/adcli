// Generated from github.com/bububa/kwai-marketing-api/api/advertiser/fund_get.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { FundGetRequest, FundGetRequestInit } from "../../model/advertiser";

export async function fundGet(client: SDKClient, accessToken: string, advertiserID: KuaishouId, signal?: AbortSignal): Promise<number> {
  const req = new FundGetRequest({
    advertiser_id: advertiserID,
  });
  const resp = await client.post<{ balance?: number }>(accessToken, req, signal);
  return resp.balance ?? 0;
}

export { fundGet as FundGet };
