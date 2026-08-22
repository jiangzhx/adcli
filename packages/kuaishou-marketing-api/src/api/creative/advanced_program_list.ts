// Generated from github.com/bububa/kwai-marketing-api/api/creative/advanced_program_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdvancedProgramListRequest, AdvancedProgramListRequestInit, AdvancedProgramListResponse } from "../../model/creative";

export async function advancedProgramList(client: SDKClient, accessToken: string, req: AdvancedProgramListRequest | AdvancedProgramListRequestInit, signal?: AbortSignal): Promise<AdvancedProgramListResponse> {
  const request = req instanceof AdvancedProgramListRequest ? req : new AdvancedProgramListRequest(req);
  return client.post<AdvancedProgramListResponse>(accessToken, request, signal);
}

export { advancedProgramList as AdvancedProgramList };
