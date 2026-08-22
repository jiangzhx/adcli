// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/creative_template_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { CreativeTemplateListRequest, CreativeTemplateListRequestInit, CreativeTemplateListResponse } from "../../../model/dsp/dpa";

export async function creativeTemplateList(client: SDKClient, accessToken: string, req: CreativeTemplateListRequest | CreativeTemplateListRequestInit, signal?: AbortSignal): Promise<CreativeTemplateListResponse> {
  const request = req instanceof CreativeTemplateListRequest ? req : new CreativeTemplateListRequest(req);
  return client.post<CreativeTemplateListResponse>(accessToken, request, signal);
}

export { creativeTemplateList as CreativeTemplateList };
