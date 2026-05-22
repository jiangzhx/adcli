// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_query_transfer_balance_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferQueryTransferBalanceV30Response } from "../models/index";


export interface CgTransferQueryTransferBalanceV30ApiOpenApiV30CgTransferQueryTransferBalanceGetRequest {
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

  async openApiV30CgTransferQueryTransferBalanceGet(request: CgTransferQueryTransferBalanceV30ApiOpenApiV30CgTransferQueryTransferBalanceGetRequest): Promise<CgTransferQueryTransferBalanceV30Response> {
    const response = await this.openApiV30CgTransferQueryTransferBalanceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferQueryTransferBalanceGetWithHttpInfo(request: CgTransferQueryTransferBalanceV30ApiOpenApiV30CgTransferQueryTransferBalanceGetRequest): Promise<ApiResponse<CgTransferQueryTransferBalanceV30Response>> {
    if (request.bizRequestNo == null) {
      throw new ApiException("bizRequestNo is required and must be specified");
    }

    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.accountIdList == null) {
      throw new ApiException("accountIdList is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferQueryTransferBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/query_transfer_balance/",
      queryParams: [
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "agent_id", value: request.agentId },
        { name: "account_id_list", value: request.accountIdList }
      ]
    });
  }
}


