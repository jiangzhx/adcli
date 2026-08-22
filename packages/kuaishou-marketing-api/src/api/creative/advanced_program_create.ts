// Generated from github.com/bububa/kwai-marketing-api/api/creative/advanced_program_create.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import type { KuaishouId } from "../../model";
import { AdvancedProgramCreateRequest, AdvancedProgramCreateRequestInit } from "../../model/creative";

export async function advancedProgramCreate(client: SDKClient, accessToken: string, req: AdvancedProgramCreateRequest | AdvancedProgramCreateRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof AdvancedProgramCreateRequest ? req : new AdvancedProgramCreateRequest(req);
  const resp = await client.post<{ unit_id?: KuaishouId }>(accessToken, request, signal);
  return resp.unit_id ?? 0;
}

export { advancedProgramCreate as AdvancedProgramCreate };
