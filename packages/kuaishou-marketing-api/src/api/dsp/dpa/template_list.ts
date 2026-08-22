// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/template_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { TemplateListRequest, TemplateListRequestInit, TemplateListResponse } from "../../../model/dsp/dpa";

export async function templateList(client: SDKClient, accessToken: string, req: TemplateListRequest | TemplateListRequestInit, signal?: AbortSignal): Promise<TemplateListResponse> {
  const request = req instanceof TemplateListRequest ? req : new TemplateListRequest(req);
  return client.post<TemplateListResponse>(accessToken, request, signal);
}

export { templateList as TemplateList };
