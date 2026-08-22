// Generated from github.com/bububa/kwai-marketing-api/api/creative/batch_update.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { BatchUpdateRequest, BatchUpdateRequestInit, BatchUpdateResponse } from "../../model/creative";

export async function batchUpdate(client: SDKClient, accessToken: string, req: BatchUpdateRequest | BatchUpdateRequestInit, signal?: AbortSignal): Promise<BatchUpdateResponse> {
  const request = req instanceof BatchUpdateRequest ? req : new BatchUpdateRequest(req);
  return client.post<BatchUpdateResponse>(accessToken, request, signal);
}

export { batchUpdate as BatchUpdate };
