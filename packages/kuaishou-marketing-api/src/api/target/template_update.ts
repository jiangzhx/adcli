// Generated from github.com/bububa/kwai-marketing-api/api/target/template_update.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { TemplateUpdateRequest, TemplateUpdateRequestInit, Template } from "../../model/target";

export async function templateUpdate(client: SDKClient, accessToken: string, req: TemplateUpdateRequest | TemplateUpdateRequestInit, signal?: AbortSignal): Promise<Template> {
  const request = req instanceof TemplateUpdateRequest ? req : new TemplateUpdateRequest(req);
  return client.post<Template>(accessToken, request, signal);
}

export { templateUpdate as TemplateUpdate };
