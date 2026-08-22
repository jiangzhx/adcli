// Generated from github.com/bububa/kwai-marketing-api/api/creative/creative_tag_advise.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { CreativeTagAdviseRequest, CreativeTagAdviseRequestInit, CreativeTagAdviseResponse } from "../../model/creative";

export async function creativeTagAdvise(client: SDKClient, accessToken: string, req: CreativeTagAdviseRequest | CreativeTagAdviseRequestInit, signal?: AbortSignal): Promise<CreativeTagAdviseResponse> {
  const request = req instanceof CreativeTagAdviseRequest ? req : new CreativeTagAdviseRequest(req);
  return client.get<CreativeTagAdviseResponse>(accessToken, request, signal);
}

export { creativeTagAdvise as CreativeTagAdvise };
