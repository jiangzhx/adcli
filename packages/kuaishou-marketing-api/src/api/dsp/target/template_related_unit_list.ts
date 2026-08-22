// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_related_unit_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { TemplateRelatedUnitListRequest, TemplateRelatedUnitListRequestInit, TemplateRelatedUnitListResponse } from "../../../model/dsp/target";

export async function templateRelatedUnitList(client: SDKClient, accessToken: string, req: TemplateRelatedUnitListRequest | TemplateRelatedUnitListRequestInit, signal?: AbortSignal): Promise<TemplateRelatedUnitListResponse> {
  const request = req instanceof TemplateRelatedUnitListRequest ? req : new TemplateRelatedUnitListRequest(req);
  return client.post<TemplateRelatedUnitListResponse>(accessToken, request, signal);
}

export { templateRelatedUnitList as TemplateRelatedUnitList };
