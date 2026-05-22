// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferQueryCanTransferBalanceV30Response, CgTransferQueryCanTransferBalanceV30TransferDirection } from "../models";


export interface OpenApiV30CgTransferQueryCanTransferBalanceGetRequest {
  bizRequestNo: string;
  agentId: number | string;
  accountId: number | string;
  targetAccountIdList: number[];
  transferDirection: CgTransferQueryCanTransferBalanceV30TransferDirection;
}

export class CgTransferQueryCanTransferBalanceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferQueryCanTransferBalanceGet(request: OpenApiV30CgTransferQueryCanTransferBalanceGetRequest): Promise<CgTransferQueryCanTransferBalanceV30Response> {
    const response = await this.openApiV30CgTransferQueryCanTransferBalanceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferQueryCanTransferBalanceGetWithHttpInfo(request: OpenApiV30CgTransferQueryCanTransferBalanceGetRequest): Promise<ApiResponse<CgTransferQueryCanTransferBalanceV30Response>> {
    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }

    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }

    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }

    if (request.targetAccountIdList == null) {
      throw new ApiException("Missing the required parameter 'targetAccountIdList' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }

    if (request.transferDirection == null) {
      throw new ApiException("Missing the required parameter 'transferDirection' when calling openApiV30CgTransferQueryCanTransferBalanceGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferQueryCanTransferBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/query_can_transfer_balance/",
      queryParams: [
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "agent_id", value: request.agentId },
        { name: "account_id", value: request.accountId },
        { name: "target_account_id_list", value: request.targetAccountIdList, collectionFormat: "csv" },
        { name: "transfer_direction", value: request.transferDirection }
      ]
    });
  }
}


