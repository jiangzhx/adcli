// Generated from github.com/bububa/kwai-marketing-api/api/oauth/approval_list.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { ApprovalListRequest, ApprovalListRequestInit, ApprovalListResponse } from "../../model/oauth";

export async function approvalList(client: SDKClient, accessToken: string, pageNo: number, pageSize: number, signal?: AbortSignal): Promise<ApprovalListResponse> {
  const req = new ApprovalListRequest({
    app_id: client.AppID(),
    secret: client.Secret(),
    access_token: accessToken,
    page_no: pageNo,
    page_size: pageSize,
  });
  return client.post<ApprovalListResponse>(accessToken, req, signal);
}

export { approvalList as ApprovalList };
