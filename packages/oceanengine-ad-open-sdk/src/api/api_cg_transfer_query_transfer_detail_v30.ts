// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_query_transfer_detail_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferQueryTransferDetailV30Response } from "../models/index";


export interface CgTransferQueryTransferDetailV30ApiOpenApiV30CgTransferQueryTransferDetailGetRequest {
  bizRequestNo: string;
  agentId: number | string;
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

  async openApiV30CgTransferQueryTransferDetailGet(request: CgTransferQueryTransferDetailV30ApiOpenApiV30CgTransferQueryTransferDetailGetRequest): Promise<CgTransferQueryTransferDetailV30Response> {
    const response = await this.openApiV30CgTransferQueryTransferDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferQueryTransferDetailGetWithHttpInfo(request: CgTransferQueryTransferDetailV30ApiOpenApiV30CgTransferQueryTransferDetailGetRequest): Promise<ApiResponse<CgTransferQueryTransferDetailV30Response>> {
    if (request.bizRequestNo == null) {
      throw new ApiException("bizRequestNo is required and must be specified");
    }

    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
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


