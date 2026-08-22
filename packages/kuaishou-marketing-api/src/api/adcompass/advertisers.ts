// Generated from github.com/bububa/kwai-marketing-api/api/adcompass/advertisers.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { AdvertisersRequest, AdvertisersRequestInit, Advertiser } from "../../model/adcompass";

export async function advertisers(client: SDKClient, accessToken: string, advertiserID: KuaishouId, signal?: AbortSignal): Promise<Advertiser[]> {
  const req = new AdvertisersRequest({
    advertiser_id: advertiserID,
  });
  const resp = await client.post<{ details?: Advertiser[] }>(accessToken, req, signal);
  return resp.details ?? [];
}

export { advertisers as Advertisers };
