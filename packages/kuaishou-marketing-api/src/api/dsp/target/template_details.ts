// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_details.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { TemplateDetailsRequest, TemplateDetailsRequestInit, TemplateDetailsResponse } from "../../../model/dsp/target";

export async function templateDetails(client: SDKClient, accessToken: string, req: TemplateDetailsRequest | TemplateDetailsRequestInit, signal?: AbortSignal): Promise<TemplateDetailsResponse> {
  const request = req instanceof TemplateDetailsRequest ? req : new TemplateDetailsRequest(req);
  return client.post<TemplateDetailsResponse>(accessToken, request, signal);
}

export { templateDetails as TemplateDetails };
