// Generated from github.com/bububa/kwai-marketing-api/api/target/template_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { TemplateListRequest, TemplateListRequestInit, TemplateListResponse } from "../../model/target";

export async function templateList(client: SDKClient, accessToken: string, req: TemplateListRequest | TemplateListRequestInit, signal?: AbortSignal): Promise<TemplateListResponse> {
  const request = req instanceof TemplateListRequest ? req : new TemplateListRequest(req);
  return client.get<TemplateListResponse>(accessToken, request, signal);
}

export { templateList as TemplateList };
