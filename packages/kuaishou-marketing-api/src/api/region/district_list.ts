// Generated from github.com/bububa/kwai-marketing-api/api/region/district_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { DistrictListRequest, DistrictListRequestInit, Record, District } from "../../model/region";

export async function districtList(client: SDKClient, accessToken: string, advertiserID: KuaishouId, signal?: AbortSignal): Promise<Record<string, District>> {
  const req = new DistrictListRequest({
    advertiser_id: advertiserID,
  });
  return client.get<Record<string, District>>(accessToken, req, signal);
}

export { districtList as DistrictList };
