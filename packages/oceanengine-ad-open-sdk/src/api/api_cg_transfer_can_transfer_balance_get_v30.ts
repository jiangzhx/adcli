// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_can_transfer_balance_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferCanTransferBalanceGetV30Platform, CgTransferCanTransferBalanceGetV30Response, CgTransferCanTransferBalanceGetV30TransferDirection } from "../models/index";


export interface CgTransferCanTransferBalanceGetV30ApiOpenApiV30CgTransferCanTransferBalanceGetGetRequest {
  organizationId: number | string;
  bizRequestNo: string;
  opponentTargetId: number | string;
  targetIdList: number[];
  transferDirection: CgTransferCanTransferBalanceGetV30TransferDirection;
  platform: CgTransferCanTransferBalanceGetV30Platform;
}

export class CgTransferCanTransferBalanceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferCanTransferBalanceGetGet(request: CgTransferCanTransferBalanceGetV30ApiOpenApiV30CgTransferCanTransferBalanceGetGetRequest): Promise<CgTransferCanTransferBalanceGetV30Response> {
    const response = await this.openApiV30CgTransferCanTransferBalanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferCanTransferBalanceGetGetWithHttpInfo(request: CgTransferCanTransferBalanceGetV30ApiOpenApiV30CgTransferCanTransferBalanceGetGetRequest): Promise<ApiResponse<CgTransferCanTransferBalanceGetV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("organizationId is required and must be specified");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("bizRequestNo is required and must be specified");
    }

    if (request.opponentTargetId == null) {
      throw new ApiException("opponentTargetId is required and must be specified");
    }

    if (request.targetIdList == null) {
      throw new ApiException("targetIdList is required and must be specified");
    }

    if (request.transferDirection == null) {
      throw new ApiException("transferDirection is required and must be specified");
    }

    if (request.platform == null) {
      throw new ApiException("platform is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferCanTransferBalanceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/can_transfer_balance/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "opponent_target_id", value: request.opponentTargetId },
        { name: "target_id_list", value: request.targetIdList },
        { name: "transfer_direction", value: request.transferDirection },
        { name: "platform", value: request.platform }
      ]
    });
  }
}


