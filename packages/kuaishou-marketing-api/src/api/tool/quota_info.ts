// Generated from github.com/bububa/kwai-marketing-api/api/tool/quota_info.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { QuotaInfoRequest, QuotaInfoRequestInit, QuotaInfoResponse } from "../../model/tool";

export async function quotaInfo(client: SDKClient, accessToken: string, req: QuotaInfoRequest | QuotaInfoRequestInit, signal?: AbortSignal): Promise<QuotaInfoResponse> {
  const request = req instanceof QuotaInfoRequest ? req : new QuotaInfoRequest(req);
  return client.post<QuotaInfoResponse>(accessToken, request, signal);
}

export { quotaInfo as QuotaInfo };
