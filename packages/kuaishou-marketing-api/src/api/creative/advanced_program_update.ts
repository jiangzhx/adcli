// Generated from github.com/bububa/kwai-marketing-api/api/creative/advanced_program_update.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AdvancedProgramUpdateRequest, AdvancedProgramUpdateRequestInit } from "../../model/creative";

export async function advancedProgramUpdate(client: SDKClient, accessToken: string, req: AdvancedProgramUpdateRequest | AdvancedProgramUpdateRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof AdvancedProgramUpdateRequest ? req : new AdvancedProgramUpdateRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { advancedProgramUpdate as AdvancedProgramUpdate };
