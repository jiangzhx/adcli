// Generated from github.com/bububa/kwai-marketing-api/api/tool/operation_record_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { OperationRecordListRequest, OperationRecordListRequestInit, OperationRecordListResponse } from "../../model/tool";

export async function operationRecordList(client: SDKClient, accessToken: string, req: OperationRecordListRequest | OperationRecordListRequestInit, signal?: AbortSignal): Promise<OperationRecordListResponse> {
  const request = req instanceof OperationRecordListRequest ? req : new OperationRecordListRequest(req);
  return client.post<OperationRecordListResponse>(accessToken, request, signal);
}

export { operationRecordList as OperationRecordList };
