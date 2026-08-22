// Generated from github.com/bububa/kwai-marketing-api/api/page/batch_give.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { BatchGiveRequest, BatchGiveRequestInit } from "../../model/page";

export async function batchGive(client: SDKClient, accessToken: string, req: BatchGiveRequest | BatchGiveRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof BatchGiveRequest ? req : new BatchGiveRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { batchGive as BatchGive };
