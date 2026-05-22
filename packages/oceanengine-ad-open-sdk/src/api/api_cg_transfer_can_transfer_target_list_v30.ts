// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_can_transfer_target_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferCanTransferTargetListV30Platform, CgTransferCanTransferTargetListV30Response, CgTransferCanTransferTargetListV30TransferDirection } from "../models/index";


export interface CgTransferCanTransferTargetListV30ApiOpenApiV30CgTransferCanTransferTargetListGetRequest {
  organizationId: number | string;
  bizRequestNo: string;
  opponentTargetId: number | string;
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

  async openApiV30CgTransferCanTransferTargetListGet(request: CgTransferCanTransferTargetListV30ApiOpenApiV30CgTransferCanTransferTargetListGetRequest): Promise<CgTransferCanTransferTargetListV30Response> {
    const response = await this.openApiV30CgTransferCanTransferTargetListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferCanTransferTargetListGetWithHttpInfo(request: CgTransferCanTransferTargetListV30ApiOpenApiV30CgTransferCanTransferTargetListGetRequest): Promise<ApiResponse<CgTransferCanTransferTargetListV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("organizationId is required and must be specified");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("bizRequestNo is required and must be specified");
    }

    if (request.opponentTargetId == null) {
      throw new ApiException("opponentTargetId is required and must be specified");
    }

    if (request.transferDirection == null) {
      throw new ApiException("transferDirection is required and must be specified");
    }

    if (request.platform == null) {
      throw new ApiException("platform is required and must be specified");
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


