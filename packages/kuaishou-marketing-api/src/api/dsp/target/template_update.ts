// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_update.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { TemplateUpdateRequest, TemplateUpdateRequestInit } from "../../../model/dsp/target";

export async function templateUpdate(client: SDKClient, accessToken: string, req: TemplateUpdateRequest | TemplateUpdateRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof TemplateUpdateRequest ? req : new TemplateUpdateRequest(req);
  const resp = await client.post<{ template_id?: KuaishouId }>(accessToken, request, signal);
  return resp.template_id ?? 0;
}

export { templateUpdate as TemplateUpdate };
