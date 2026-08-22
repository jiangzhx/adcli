// Generated from github.com/bububa/kwai-marketing-api/api/tool/convert_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ConvertListRequest, ConvertListRequestInit, ConvertListResponse } from "../../model/tool";

export async function convertList(client: SDKClient, accessToken: string, req: ConvertListRequest | ConvertListRequestInit, signal?: AbortSignal): Promise<ConvertListResponse> {
  const request = req instanceof ConvertListRequest ? req : new ConvertListRequest(req);
  return client.get<ConvertListResponse>(accessToken, request, signal);
}

export { convertList as ConvertList };
