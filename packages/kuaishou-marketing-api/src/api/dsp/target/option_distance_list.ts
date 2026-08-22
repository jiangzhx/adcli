// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/option_distance_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { OptionDistanceListRequest, OptionDistanceListRequestInit, OptionDistanceListResponse } from "../../../model/dsp/target";

export async function optionDistanceList(client: SDKClient, accessToken: string, req: OptionDistanceListRequest | OptionDistanceListRequestInit, signal?: AbortSignal): Promise<OptionDistanceListResponse> {
  const request = req instanceof OptionDistanceListRequest ? req : new OptionDistanceListRequest(req);
  return client.post<OptionDistanceListResponse>(accessToken, request, signal);
}

export { optionDistanceList as OptionDistanceList };
