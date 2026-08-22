// Generated from github.com/bububa/kwai-marketing-api/api/lp/consult_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ConsultListRequest, ConsultListRequestInit, ConsultListResponse } from "../../model/lp";

export async function consultList(client: SDKClient, accessToken: string, req: ConsultListRequest | ConsultListRequestInit, signal?: AbortSignal): Promise<ConsultListResponse> {
  const request = req instanceof ConsultListRequest ? req : new ConsultListRequest(req);
  return client.post<ConsultListResponse>(accessToken, request, signal);
}

export { consultList as ConsultList };
