// Generated from github.com/bububa/kwai-marketing-api/api/advertiser/info.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { InfoRequest, InfoRequestInit, Info } from "../../model/advertiser";

export async function info(client: SDKClient, accessToken: string, advertiserID: KuaishouId, signal?: AbortSignal): Promise<Info> {
  const req = new InfoRequest({
    advertiser_id: advertiserID,
  });
  return client.post<Info>(accessToken, req, signal);
}

export { info as Info };
