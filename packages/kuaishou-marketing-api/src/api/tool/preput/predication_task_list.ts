// Generated from github.com/bububa/kwai-marketing-api/api/tool/preput/predication_task_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { PredicationTaskListRequest, PredicationTaskListRequestInit, PredicationTaskListResponse } from "../../../model/tool/preput";

export async function predicationTaskList(client: SDKClient, accessToken: string, req: PredicationTaskListRequest | PredicationTaskListRequestInit, signal?: AbortSignal): Promise<PredicationTaskListResponse> {
  const request = req instanceof PredicationTaskListRequest ? req : new PredicationTaskListRequest(req);
  return client.post<PredicationTaskListResponse>(accessToken, request, signal);
}

export { predicationTaskList as PredicationTaskList };
