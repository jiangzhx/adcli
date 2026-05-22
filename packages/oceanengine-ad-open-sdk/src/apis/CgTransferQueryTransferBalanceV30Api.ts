// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferQueryTransferBalanceV30Response } from "../models";


export class CgTransferQueryTransferBalanceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferQueryTransferBalanceGet(bizRequestNo: string, agentId: number, accountIdList: number[]): Promise<CgTransferQueryTransferBalanceV30Response> {
    const response = await this.openApiV30CgTransferQueryTransferBalanceGetWithHttpInfo(bizRequestNo, agentId, accountIdList);
    return response.data;
  }

  async openApiV30CgTransferQueryTransferBalanceGetWithHttpInfo(bizRequestNo: string, agentId: number, accountIdList: number[]): Promise<ApiResponse<CgTransferQueryTransferBalanceV30Response>> {
    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferQueryTransferBalanceGet");
    }

    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30CgTransferQueryTransferBalanceGet");
    }

    if (accountIdList == null) {
      throw new ApiException("Missing the required parameter 'accountIdList' when calling openApiV30CgTransferQueryTransferBalanceGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferQueryTransferBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/query_transfer_balance/",
      queryParams: [
        { name: "biz_request_no", value: bizRequestNo },
        { name: "agent_id", value: agentId },
        { name: "account_id_list", value: accountIdList, collectionFormat: "csv" }
      ]
    });
  }
}


