// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_create.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { TemplateCreateRequest, TemplateCreateRequestInit } from "../../../model/dsp/target";

export async function templateCreate(client: SDKClient, accessToken: string, req: TemplateCreateRequest | TemplateCreateRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof TemplateCreateRequest ? req : new TemplateCreateRequest(req);
  const resp = await client.post<{ template_id?: KuaishouId }>(accessToken, request, signal);
  return resp.template_id ?? 0;
}

export { templateCreate as TemplateCreate };
