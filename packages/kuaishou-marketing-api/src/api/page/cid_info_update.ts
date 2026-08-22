// Generated from github.com/bububa/kwai-marketing-api/api/page/cid_info_update.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { CidInfoUpdateRequest, CidInfoUpdateRequestInit } from "../../model/page";

export async function cidInfoUpdate(client: SDKClient, accessToken: string, req: CidInfoUpdateRequest | CidInfoUpdateRequestInit, signal?: AbortSignal): Promise<string> {
  const request = req instanceof CidInfoUpdateRequest ? req : new CidInfoUpdateRequest(req);
  const resp = await client.post<{ page_id?: string }>(accessToken, request, signal);
  return resp.page_id ?? "";
}

export { cidInfoUpdate as CidInfoUpdate };
