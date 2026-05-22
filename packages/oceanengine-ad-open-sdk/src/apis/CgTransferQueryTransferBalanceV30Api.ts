// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferQueryTransferBalanceV30Response } from "../models";


export interface OpenApiV30CgTransferQueryTransferBalanceGetRequest {
  bizRequestNo: string;
  agentId: number | string;
  accountIdList: number[];
}

export class CgTransferQueryTransferBalanceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferQueryTransferBalanceGet(request: OpenApiV30CgTransferQueryTransferBalanceGetRequest): Promise<CgTransferQueryTransferBalanceV30Response> {
    const response = await this.openApiV30CgTransferQueryTransferBalanceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferQueryTransferBalanceGetWithHttpInfo(request: OpenApiV30CgTransferQueryTransferBalanceGetRequest): Promise<ApiResponse<CgTransferQueryTransferBalanceV30Response>> {
    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferQueryTransferBalanceGet");
    }

    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30CgTransferQueryTransferBalanceGet");
    }

    if (request.accountIdList == null) {
      throw new ApiException("Missing the required parameter 'accountIdList' when calling openApiV30CgTransferQueryTransferBalanceGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferQueryTransferBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/query_transfer_balance/",
      queryParams: [
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "agent_id", value: request.agentId },
        { name: "account_id_list", value: request.accountIdList, collectionFormat: "csv" }
      ]
    });
  }
}


