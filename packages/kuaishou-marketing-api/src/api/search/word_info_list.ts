// Generated from github.com/bububa/kwai-marketing-api/api/search/word_info_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { WordInfoListRequest, WordInfoListRequestInit, WordInfoListResponse } from "../../model/search";

export async function wordInfoList(client: SDKClient, accessToken: string, req: WordInfoListRequest | WordInfoListRequestInit, signal?: AbortSignal): Promise<WordInfoListResponse> {
  const request = req instanceof WordInfoListRequest ? req : new WordInfoListRequest(req);
  return client.post<WordInfoListResponse>(accessToken, request, signal);
}

export { wordInfoList as WordInfoList };
