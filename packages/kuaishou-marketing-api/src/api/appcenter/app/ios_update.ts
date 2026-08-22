// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/ios_update.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { IosUpdateRequest, IosUpdateRequestInit } from "../../../model/appcenter/app";

export async function iosUpdate(client: SDKClient, accessToken: string, req: IosUpdateRequest | IosUpdateRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof IosUpdateRequest ? req : new IosUpdateRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { iosUpdate as IosUpdate };
