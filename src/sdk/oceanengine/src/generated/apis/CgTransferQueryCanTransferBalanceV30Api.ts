// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CgTransferQueryCanTransferBalanceV30Response, CgTransferQueryCanTransferBalanceV30TransferDirection } from "../models";


export class CgTransferQueryCanTransferBalanceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferQueryCanTransferBalanceGet(bizRequestNo: string, agentId: number, accountId: number, targetAccountIdList: number[], transferDirection: CgTransferQueryCanTransferBalanceV30TransferDirection): Promise<CgTransferQueryCanTransferBalanceV30Response> {
    const response = await this.openApiV30CgTransferQueryCanTransferBalanceGetWithHttpInfo(bizRequestNo, agentId, accountId, targetAccountIdList, transferDirection);
    return response.data;
  }

  async openApiV30CgTransferQueryCanTransferBalanceGetWithHttpInfo(bizRequestNo: string, agentId: number, accountId: number, targetAccountIdList: number[], transferDirection: CgTransferQueryCanTransferBalanceV30TransferDirection): Promise<ApiResponse<CgTransferQueryCanTransferBalanceV30Response>> {
    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }

    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }

    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }

    if (targetAccountIdList == null) {
      throw new ApiException("Missing the required parameter 'targetAccountIdList' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }

    if (transferDirection == null) {
      throw new ApiException("Missing the required parameter 'transferDirection' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferQueryCanTransferBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/query_can_transfer_balance/",
      queryParams: [
        { name: "biz_request_no", value: bizRequestNo },
        { name: "agent_id", value: agentId },
        { name: "account_id", value: accountId },
        { name: "transfer_direction", value: transferDirection },
        { name: "target_account_id_list", value: targetAccountIdList, collectionFormat: "csv" }
      ]
    });
  }
}


