// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferTransferBalanceGetV30Platform, CgTransferTransferBalanceGetV30Response } from "../models";


export class CgTransferTransferBalanceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferTransferBalanceGetGet(organizationId: number, bizRequestNo: string, targetIdList: number[], platform: CgTransferTransferBalanceGetV30Platform): Promise<CgTransferTransferBalanceGetV30Response> {
    const response = await this.openApiV30CgTransferTransferBalanceGetGetWithHttpInfo(organizationId, bizRequestNo, targetIdList, platform);
    return response.data;
  }

  async openApiV30CgTransferTransferBalanceGetGetWithHttpInfo(organizationId: number, bizRequestNo: string, targetIdList: number[], platform: CgTransferTransferBalanceGetV30Platform): Promise<ApiResponse<CgTransferTransferBalanceGetV30Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30CgTransferTransferBalanceGetGet");
    }

    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferTransferBalanceGetGet");
    }

    if (targetIdList == null) {
      throw new ApiException("Missing the required parameter 'targetIdList' when calling openApiV30CgTransferTransferBalanceGetGet");
    }

    if (platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30CgTransferTransferBalanceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferTransferBalanceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/transfer_balance/get/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "biz_request_no", value: bizRequestNo },
        { name: "platform", value: platform },
        { name: "target_id_list", value: targetIdList, collectionFormat: "csv" }
      ]
    });
  }
}


