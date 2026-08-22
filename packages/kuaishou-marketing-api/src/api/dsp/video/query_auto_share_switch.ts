// Generated from github.com/bububa/kwai-marketing-api/api/dsp/video/query_auto_share_switch.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { QueryAutoShareSwitchRequest, QueryAutoShareSwitchRequestInit, QueryAutoShareSwitchResponse } from "../../../model/dsp/video";

export async function queryAutoShareSwitch(client: SDKClient, accessToken: string, req: QueryAutoShareSwitchRequest | QueryAutoShareSwitchRequestInit, signal?: AbortSignal): Promise<QueryAutoShareSwitchResponse> {
  const request = req instanceof QueryAutoShareSwitchRequest ? req : new QueryAutoShareSwitchRequest(req);
  return client.post<QueryAutoShareSwitchResponse>(accessToken, request, signal);
}

export { queryAutoShareSwitch as QueryAutoShareSwitch };
