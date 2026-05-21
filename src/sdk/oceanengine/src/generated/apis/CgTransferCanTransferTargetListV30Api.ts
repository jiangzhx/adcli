// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CgTransferCanTransferTargetListV30Platform, CgTransferCanTransferTargetListV30Response, CgTransferCanTransferTargetListV30TransferDirection } from "../models";


export class CgTransferCanTransferTargetListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferCanTransferTargetListGet(organizationId: number, bizRequestNo: string, opponentTargetId: number, transferDirection: CgTransferCanTransferTargetListV30TransferDirection, platform: CgTransferCanTransferTargetListV30Platform, page: number, pageSize: number): Promise<CgTransferCanTransferTargetListV30Response> {
    const response = await this.openApiV30CgTransferCanTransferTargetListGetWithHttpInfo(organizationId, bizRequestNo, opponentTargetId, transferDirection, platform, page, pageSize);
    return response.data;
  }

  async openApiV30CgTransferCanTransferTargetListGetWithHttpInfo(organizationId: number, bizRequestNo: string, opponentTargetId: number, transferDirection: CgTransferCanTransferTargetListV30TransferDirection, platform: CgTransferCanTransferTargetListV30Platform, page: number, pageSize: number): Promise<ApiResponse<CgTransferCanTransferTargetListV30Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30CgTransferCanTransferTargetListGet");
    }

    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferCanTransferTargetListGet");
    }

    if (opponentTargetId == null) {
      throw new ApiException("Missing the required parameter 'opponentTargetId' when calling openApiV30CgTransferCanTransferTargetListGet");
    }

    if (transferDirection == null) {
      throw new ApiException("Missing the required parameter 'transferDirection' when calling openApiV30CgTransferCanTransferTargetListGet");
    }

    if (platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30CgTransferCanTransferTargetListGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferCanTransferTargetListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/can_transfer_target/list/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "biz_request_no", value: bizRequestNo },
        { name: "opponent_target_id", value: opponentTargetId },
        { name: "transfer_direction", value: transferDirection },
        { name: "platform", value: platform },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


