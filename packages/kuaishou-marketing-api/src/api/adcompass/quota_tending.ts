// Generated from github.com/bububa/kwai-marketing-api/api/adcompass/quota_tending.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { QuotaTendingRequest, QuotaTendingRequestInit } from "../../model/adcompass";

export async function quotaTending(client: SDKClient, accessToken: string, req: QuotaTendingRequest | QuotaTendingRequestInit, signal?: AbortSignal): Promise<string> {
  const request = req instanceof QuotaTendingRequest ? req : new QuotaTendingRequest(req);
  const resp = await client.post<{ describe?: string }>(accessToken, request, signal);
  return resp.describe ?? "";
}

export { quotaTending as QuotaTending };
