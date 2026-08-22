// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/offline_appstores.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { OfflineAppStoresRequest, OfflineAppStoresRequestInit } from "../../../model/appcenter/app";

export async function offlineAppStores(client: SDKClient, accessToken: string, req: OfflineAppStoresRequest | OfflineAppStoresRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof OfflineAppStoresRequest ? req : new OfflineAppStoresRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { offlineAppStores as OfflineAppStores };
