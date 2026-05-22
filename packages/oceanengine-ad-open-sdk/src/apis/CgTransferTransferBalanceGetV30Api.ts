// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferTransferBalanceGetV30Platform, CgTransferTransferBalanceGetV30Response } from "../models";


export interface OpenApiV30CgTransferTransferBalanceGetGetRequest {
  organizationId: number;
  bizRequestNo: string;
  targetIdList: number[];
  platform: CgTransferTransferBalanceGetV30Platform;
}

export class CgTransferTransferBalanceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferTransferBalanceGetGet(request: OpenApiV30CgTransferTransferBalanceGetGetRequest): Promise<CgTransferTransferBalanceGetV30Response> {
    const response = await this.openApiV30CgTransferTransferBalanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferTransferBalanceGetGetWithHttpInfo(request: OpenApiV30CgTransferTransferBalanceGetGetRequest): Promise<ApiResponse<CgTransferTransferBalanceGetV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30CgTransferTransferBalanceGetGet");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferTransferBalanceGetGet");
    }

    if (request.targetIdList == null) {
      throw new ApiException("Missing the required parameter 'targetIdList' when calling openApiV30CgTransferTransferBalanceGetGet");
    }

    if (request.platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30CgTransferTransferBalanceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferTransferBalanceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/transfer_balance/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "target_id_list", value: request.targetIdList, collectionFormat: "csv" },
        { name: "platform", value: request.platform }
      ]
    });
  }
}


