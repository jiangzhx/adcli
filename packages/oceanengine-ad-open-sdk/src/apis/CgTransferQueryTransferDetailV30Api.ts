// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferQueryTransferDetailV30Response } from "../models";


export interface OpenApiV30CgTransferQueryTransferDetailGetRequest {
  bizRequestNo: string;
  agentId: number;
  transferBizRequestNo?: string;
  transferSerial?: string;
}

export class CgTransferQueryTransferDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferQueryTransferDetailGet(request: OpenApiV30CgTransferQueryTransferDetailGetRequest): Promise<CgTransferQueryTransferDetailV30Response> {
    const response = await this.openApiV30CgTransferQueryTransferDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferQueryTransferDetailGetWithHttpInfo(request: OpenApiV30CgTransferQueryTransferDetailGetRequest): Promise<ApiResponse<CgTransferQueryTransferDetailV30Response>> {
    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferQueryTransferDetailGet");
    }

    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30CgTransferQueryTransferDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferQueryTransferDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/query_transfer_detail/",
      queryParams: [
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "agent_id", value: request.agentId },
        { name: "transfer_biz_request_no", value: request.transferBizRequestNo },
        { name: "transfer_serial", value: request.transferSerial }
      ]
    });
  }
}


