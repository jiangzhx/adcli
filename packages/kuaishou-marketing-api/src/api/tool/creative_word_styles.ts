// Generated from github.com/bububa/kwai-marketing-api/api/tool/creative_word_styles.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { CreativeWordStylesRequest, CreativeWordStylesRequestInit, CreativeWordStyle } from "../../model/tool";

export async function creativeWordStyles(client: SDKClient, accessToken: string, advertiserID: KuaishouId, signal?: AbortSignal): Promise<CreativeWordStyle[]> {
  const req = new CreativeWordStylesRequest({
    advertiser_id: advertiserID,
  });
  return client.get<CreativeWordStyle[]>(accessToken, req, signal);
}

export { creativeWordStyles as CreativeWordStyles };
