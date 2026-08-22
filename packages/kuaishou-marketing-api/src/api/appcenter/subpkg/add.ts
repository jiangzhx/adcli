// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/subpkg/add.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { AddRequest, AddRequestInit, SubPackage } from "../../../model/appcenter/subpkg";

export async function add(client: SDKClient, accessToken: string, req: AddRequest | AddRequestInit, signal?: AbortSignal): Promise<SubPackage[]> {
  const request = req instanceof AddRequest ? req : new AddRequest(req);
  return client.post<SubPackage[]>(accessToken, request, signal);
}

export { add as Add };
