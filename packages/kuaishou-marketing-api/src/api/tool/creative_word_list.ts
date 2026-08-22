// Generated from github.com/bububa/kwai-marketing-api/api/tool/creative_word_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { CreativeWordListRequest, CreativeWordListRequestInit, CreativeWord } from "../../model/tool";

export async function creativeWordList(client: SDKClient, accessToken: string, advertiserID: KuaishouId, signal?: AbortSignal): Promise<CreativeWord[]> {
  const req = new CreativeWordListRequest({
    advertiser_id: advertiserID,
  });
  return client.get<CreativeWord[]>(accessToken, req, signal);
}

export { creativeWordList as CreativeWordList };
