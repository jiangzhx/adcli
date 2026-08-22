// Generated from github.com/bububa/kwai-marketing-api/api/tool/preput/predication_task_create.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { PredicationTaskCreateRequest, PredicationTaskCreateRequestInit, RealTaskResult } from "../../../model/tool/preput";

export async function predicationTaskCreate(client: SDKClient, accessToken: string, req: PredicationTaskCreateRequest | PredicationTaskCreateRequestInit, signal?: AbortSignal): Promise<RealTaskResult> {
  const request = req instanceof PredicationTaskCreateRequest ? req : new PredicationTaskCreateRequest(req);
  return client.post<RealTaskResult>(accessToken, request, signal);
}

export { predicationTaskCreate as PredicationTaskCreate };
