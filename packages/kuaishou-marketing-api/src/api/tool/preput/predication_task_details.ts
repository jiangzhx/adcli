// Generated from github.com/bububa/kwai-marketing-api/api/tool/preput/predication_task_details.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { PredicationTaskCreateRequest, PredicationTaskCreateRequestInit, AdPredicationTaskDetail } from "../../../model/tool/preput";

export async function predicationTaskDetails(client: SDKClient, accessToken: string, req: PredicationTaskCreateRequest | PredicationTaskCreateRequestInit, signal?: AbortSignal): Promise<AdPredicationTaskDetail> {
  const request = req instanceof PredicationTaskCreateRequest ? req : new PredicationTaskCreateRequest(req);
  return client.post<AdPredicationTaskDetail>(accessToken, request, signal);
}

export { predicationTaskDetails as PredicationTaskDetails };
