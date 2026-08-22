// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/create_android.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { CreateAndroidRequest, CreateAndroidRequestInit, App } from "../../../model/appcenter/app";

export async function createAndroid(client: SDKClient, accessToken: string, req: CreateAndroidRequest | CreateAndroidRequestInit, signal?: AbortSignal): Promise<App> {
  const request = req instanceof CreateAndroidRequest ? req : new CreateAndroidRequest(req);
  return client.post<App>(accessToken, request, signal);
}

export { createAndroid as CreateAndroid };
