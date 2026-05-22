// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferCanTransferBalanceGetV30Platform, CgTransferCanTransferBalanceGetV30Response, CgTransferCanTransferBalanceGetV30TransferDirection } from "../models";


export class CgTransferCanTransferBalanceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferCanTransferBalanceGetGet(organizationId: number, bizRequestNo: string, opponentTargetId: number, targetIdList: number[], transferDirection: CgTransferCanTransferBalanceGetV30TransferDirection, platform: CgTransferCanTransferBalanceGetV30Platform): Promise<CgTransferCanTransferBalanceGetV30Response> {
    const response = await this.openApiV30CgTransferCanTransferBalanceGetGetWithHttpInfo(organizationId, bizRequestNo, opponentTargetId, targetIdList, transferDirection, platform);
    return response.data;
  }

  async openApiV30CgTransferCanTransferBalanceGetGetWithHttpInfo(organizationId: number, bizRequestNo: string, opponentTargetId: number, targetIdList: number[], transferDirection: CgTransferCanTransferBalanceGetV30TransferDirection, platform: CgTransferCanTransferBalanceGetV30Platform): Promise<ApiResponse<CgTransferCanTransferBalanceGetV30Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30CgTransferCanTransferBalanceGetGet");
    }

    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferCanTransferBalanceGetGet");
    }

    if (opponentTargetId == null) {
      throw new ApiException("Missing the required parameter 'opponentTargetId' when calling openApiV30CgTransferCanTransferBalanceGetGet");
    }

    if (targetIdList == null) {
      throw new ApiException("Missing the required parameter 'targetIdList' when calling openApiV30CgTransferCanTransferBalanceGetGet");
    }

    if (transferDirection == null) {
      throw new ApiException("Missing the required parameter 'transferDirection' when calling openApiV30CgTransferCanTransferBalanceGetGet");
    }

    if (platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30CgTransferCanTransferBalanceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferCanTransferBalanceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/can_transfer_balance/get/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "biz_request_no", value: bizRequestNo },
        { name: "opponent_target_id", value: opponentTargetId },
        { name: "transfer_direction", value: transferDirection },
        { name: "platform", value: platform },
        { name: "target_id_list", value: targetIdList, collectionFormat: "csv" }
      ]
    });
  }
}


