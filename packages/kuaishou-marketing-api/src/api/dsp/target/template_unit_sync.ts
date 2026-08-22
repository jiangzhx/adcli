// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_unit_sync.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { TemplateUnitSyncRequest, TemplateUnitSyncRequestInit, TemplateUnitSyncResponse } from "../../../model/dsp/target";

export async function templateUnitSync(client: SDKClient, accessToken: string, req: TemplateUnitSyncRequest | TemplateUnitSyncRequestInit, signal?: AbortSignal): Promise<TemplateUnitSyncResponse> {
  const request = req instanceof TemplateUnitSyncRequest ? req : new TemplateUnitSyncRequest(req);
  return client.post<TemplateUnitSyncResponse>(accessToken, request, signal);
}

export { templateUnitSync as TemplateUnitSync };
