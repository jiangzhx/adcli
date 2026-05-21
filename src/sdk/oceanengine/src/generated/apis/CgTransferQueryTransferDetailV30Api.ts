// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CgTransferQueryTransferDetailV30Response } from "../models";


export class CgTransferQueryTransferDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferQueryTransferDetailGet(bizRequestNo: string, agentId: number, transferBizRequestNo: string, transferSerial: string): Promise<CgTransferQueryTransferDetailV30Response> {
    const response = await this.openApiV30CgTransferQueryTransferDetailGetWithHttpInfo(bizRequestNo, agentId, transferBizRequestNo, transferSerial);
    return response.data;
  }

  async openApiV30CgTransferQueryTransferDetailGetWithHttpInfo(bizRequestNo: string, agentId: number, transferBizRequestNo: string, transferSerial: string): Promise<ApiResponse<CgTransferQueryTransferDetailV30Response>> {
    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferQueryTransferDetailGet");
    }

    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30CgTransferQueryTransferDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferQueryTransferDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/query_transfer_detail/",
      queryParams: [
        { name: "biz_request_no", value: bizRequestNo },
        { name: "agent_id", value: agentId },
        { name: "transfer_biz_request_no", value: transferBizRequestNo },
        { name: "transfer_serial", value: transferSerial }
      ]
    });
  }
}


