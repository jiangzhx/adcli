// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_sync_history.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { TemplateSyncHistoryRequest, TemplateSyncHistoryRequestInit, TemplateSyncHistoryResponse } from "../../../model/dsp/target";

export async function templateSyncHistory(client: SDKClient, accessToken: string, req: TemplateSyncHistoryRequest | TemplateSyncHistoryRequestInit, signal?: AbortSignal): Promise<TemplateSyncHistoryResponse> {
  const request = req instanceof TemplateSyncHistoryRequest ? req : new TemplateSyncHistoryRequest(req);
  return client.post<TemplateSyncHistoryResponse>(accessToken, request, signal);
}

export { templateSyncHistory as TemplateSyncHistory };
