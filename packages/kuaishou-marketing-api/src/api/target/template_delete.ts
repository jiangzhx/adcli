// Generated from github.com/bububa/kwai-marketing-api/api/target/template_delete.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { TemplateDeleteRequest, TemplateDeleteRequestInit } from "../../model/target";

export async function templateDelete(client: SDKClient, accessToken: string, req: TemplateDeleteRequest | TemplateDeleteRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof TemplateDeleteRequest ? req : new TemplateDeleteRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { templateDelete as TemplateDelete };
