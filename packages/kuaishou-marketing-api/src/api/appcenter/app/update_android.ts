// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/update_android.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { UpdateAndroidRequest, UpdateAndroidRequestInit, App } from "../../../model/appcenter/app";

export async function updateAndroid(client: SDKClient, accessToken: string, req: UpdateAndroidRequest | UpdateAndroidRequestInit, signal?: AbortSignal): Promise<App> {
  const request = req instanceof UpdateAndroidRequest ? req : new UpdateAndroidRequest(req);
  return client.post<App>(accessToken, request, signal);
}

export { updateAndroid as UpdateAndroid };
