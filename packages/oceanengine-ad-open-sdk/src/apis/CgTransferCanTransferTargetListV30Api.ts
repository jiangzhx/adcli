// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferCanTransferTargetListV30Platform, CgTransferCanTransferTargetListV30Response, CgTransferCanTransferTargetListV30TransferDirection } from "../models";


export interface OpenApiV30CgTransferCanTransferTargetListGetRequest {
  organizationId: number;
  bizRequestNo: string;
  opponentTargetId: number;
  transferDirection: CgTransferCanTransferTargetListV30TransferDirection;
  platform: CgTransferCanTransferTargetListV30Platform;
  page?: number;
  pageSize?: number;
}

export class CgTransferCanTransferTargetListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferCanTransferTargetListGet(request: OpenApiV30CgTransferCanTransferTargetListGetRequest): Promise<CgTransferCanTransferTargetListV30Response> {
    const response = await this.openApiV30CgTransferCanTransferTargetListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferCanTransferTargetListGetWithHttpInfo(request: OpenApiV30CgTransferCanTransferTargetListGetRequest): Promise<ApiResponse<CgTransferCanTransferTargetListV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30CgTransferCanTransferTargetListGet");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferCanTransferTargetListGet");
    }

    if (request.opponentTargetId == null) {
      throw new ApiException("Missing the required parameter 'opponentTargetId' when calling openApiV30CgTransferCanTransferTargetListGet");
    }

    if (request.transferDirection == null) {
      throw new ApiException("Missing the required parameter 'transferDirection' when calling openApiV30CgTransferCanTransferTargetListGet");
    }

    if (request.platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30CgTransferCanTransferTargetListGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferCanTransferTargetListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/can_transfer_target/list/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "opponent_target_id", value: request.opponentTargetId },
        { name: "transfer_direction", value: request.transferDirection },
        { name: "platform", value: request.platform },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


