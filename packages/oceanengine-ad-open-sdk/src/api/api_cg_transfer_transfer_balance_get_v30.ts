// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_transfer_balance_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferTransferBalanceGetV30Platform, CgTransferTransferBalanceGetV30Response } from "../models/index";


export interface CgTransferTransferBalanceGetV30ApiOpenApiV30CgTransferTransferBalanceGetGetRequest {
  organizationId: number | string;
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

  async openApiV30CgTransferTransferBalanceGetGet(request: CgTransferTransferBalanceGetV30ApiOpenApiV30CgTransferTransferBalanceGetGetRequest): Promise<CgTransferTransferBalanceGetV30Response> {
    const response = await this.openApiV30CgTransferTransferBalanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferTransferBalanceGetGetWithHttpInfo(request: CgTransferTransferBalanceGetV30ApiOpenApiV30CgTransferTransferBalanceGetGetRequest): Promise<ApiResponse<CgTransferTransferBalanceGetV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("organizationId is required and must be specified");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("bizRequestNo is required and must be specified");
    }

    if (request.targetIdList == null) {
      throw new ApiException("targetIdList is required and must be specified");
    }

    if (request.platform == null) {
      throw new ApiException("platform is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferTransferBalanceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/transfer_balance/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "target_id_list", value: request.targetIdList },
        { name: "platform", value: request.platform }
      ]
    });
  }
}


