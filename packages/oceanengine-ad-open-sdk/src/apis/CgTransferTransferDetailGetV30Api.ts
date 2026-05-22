// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferTransferDetailGetV30Platform, CgTransferTransferDetailGetV30Response } from "../models";


export interface OpenApiV30CgTransferTransferDetailGetGetRequest {
  organizationId: number | string;
  bizRequestNo: string;
  platform: CgTransferTransferDetailGetV30Platform;
  transferBizRequestNo?: string;
  transferSerial?: string;
}

export class CgTransferTransferDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferTransferDetailGetGet(request: OpenApiV30CgTransferTransferDetailGetGetRequest): Promise<CgTransferTransferDetailGetV30Response> {
    const response = await this.openApiV30CgTransferTransferDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferTransferDetailGetGetWithHttpInfo(request: OpenApiV30CgTransferTransferDetailGetGetRequest): Promise<ApiResponse<CgTransferTransferDetailGetV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30CgTransferTransferDetailGetGet");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferTransferDetailGetGet");
    }

    if (request.platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30CgTransferTransferDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferTransferDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/transfer_detail/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "transfer_biz_request_no", value: request.transferBizRequestNo },
        { name: "transfer_serial", value: request.transferSerial },
        { name: "platform", value: request.platform }
      ]
    });
  }
}


