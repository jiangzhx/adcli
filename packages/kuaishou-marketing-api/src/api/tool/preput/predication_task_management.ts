// Generated from github.com/bububa/kwai-marketing-api/api/tool/preput/predication_task_management.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { PredicationTaskManagementRequest, PredicationTaskManagementRequestInit, RealTaskResult } from "../../../model/tool/preput";

export async function predicationTaskManagement(client: SDKClient, accessToken: string, req: PredicationTaskManagementRequest | PredicationTaskManagementRequestInit, signal?: AbortSignal): Promise<RealTaskResult> {
  const request = req instanceof PredicationTaskManagementRequest ? req : new PredicationTaskManagementRequest(req);
  return client.post<RealTaskResult>(accessToken, request, signal);
}

export { predicationTaskManagement as PredicationTaskManagement };
