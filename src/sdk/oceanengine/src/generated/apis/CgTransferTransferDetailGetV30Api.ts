// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CgTransferTransferDetailGetV30Platform, CgTransferTransferDetailGetV30Response } from "../models";


export class CgTransferTransferDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferTransferDetailGetGet(organizationId: number, bizRequestNo: string, platform: CgTransferTransferDetailGetV30Platform, transferBizRequestNo: string, transferSerial: string): Promise<CgTransferTransferDetailGetV30Response> {
    const response = await this.openApiV30CgTransferTransferDetailGetGetWithHttpInfo(organizationId, bizRequestNo, platform, transferBizRequestNo, transferSerial);
    return response.data;
  }

  async openApiV30CgTransferTransferDetailGetGetWithHttpInfo(organizationId: number, bizRequestNo: string, platform: CgTransferTransferDetailGetV30Platform, transferBizRequestNo: string, transferSerial: string): Promise<ApiResponse<CgTransferTransferDetailGetV30Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30CgTransferTransferDetailGetGet");
    }

    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferTransferDetailGetGet");
    }

    if (platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30CgTransferTransferDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferTransferDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/transfer_detail/get/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "biz_request_no", value: bizRequestNo },
        { name: "transfer_biz_request_no", value: transferBizRequestNo },
        { name: "transfer_serial", value: transferSerial },
        { name: "platform", value: platform }
      ]
    });
  }
}


