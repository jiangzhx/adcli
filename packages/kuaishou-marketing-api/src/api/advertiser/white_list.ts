// Generated from github.com/bububa/kwai-marketing-api/api/advertiser/white_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { WhiteListRequest, WhiteListRequestInit, WhiteListResponse } from "../../model/advertiser";

export async function whiteList(client: SDKClient, accessToken: string, advertiserID: KuaishouId, signal?: AbortSignal): Promise<WhiteListResponse> {
  const req = new WhiteListRequest({
    advertiser_id: advertiserID,
  });
  return client.get<WhiteListResponse>(accessToken, req, signal);
}

export { whiteList as WhiteList };
