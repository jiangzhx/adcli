// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/subpkg/description.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { DescriptionRequest, DescriptionRequestInit } from "../../../model/appcenter/subpkg";

export async function description(client: SDKClient, accessToken: string, req: DescriptionRequest | DescriptionRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof DescriptionRequest ? req : new DescriptionRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { description as Description };
