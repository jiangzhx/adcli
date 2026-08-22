// Generated from github.com/bububa/kwai-marketing-api/api/target/template_create.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { TemplateCreateRequest, TemplateCreateRequestInit, Template } from "../../model/target";

export async function templateCreate(client: SDKClient, accessToken: string, req: TemplateCreateRequest | TemplateCreateRequestInit, signal?: AbortSignal): Promise<Template> {
  const request = req instanceof TemplateCreateRequest ? req : new TemplateCreateRequest(req);
  return client.post<Template>(accessToken, request, signal);
}

export { templateCreate as TemplateCreate };
