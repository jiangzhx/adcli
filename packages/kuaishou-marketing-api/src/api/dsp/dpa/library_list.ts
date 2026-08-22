// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/library_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { LibraryListRequest, LibraryListRequestInit, LibraryListResponse } from "../../../model/dsp/dpa";

export async function libraryList(client: SDKClient, accessToken: string, req: LibraryListRequest | LibraryListRequestInit, signal?: AbortSignal): Promise<LibraryListResponse> {
  const request = req instanceof LibraryListRequest ? req : new LibraryListRequest(req);
  return client.post<LibraryListResponse>(accessToken, request, signal);
}

export { libraryList as LibraryList };
