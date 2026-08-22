// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_delete.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import type { KuaishouId } from "../../../model";
import { TemplateDeleteRequest, TemplateDeleteRequestInit } from "../../../model/dsp/target";

export async function templateDelete(client: SDKClient, accessToken: string, req: TemplateDeleteRequest | TemplateDeleteRequestInit, signal?: AbortSignal): Promise<KuaishouId> {
  const request = req instanceof TemplateDeleteRequest ? req : new TemplateDeleteRequest(req);
  const resp = await client.post<{ template_id?: KuaishouId }>(accessToken, request, signal);
  return resp.template_id ?? 0;
}

export { templateDelete as TemplateDelete };
