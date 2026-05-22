// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPreAuditGetV2Filter, ToolsPreAuditGetV2Response } from "../models";


export interface OpenApi2ToolsPreAuditGetGetRequest {
  advertiserId: number;
  filter?: ToolsPreAuditGetV2Filter;
  page?: number;
  pageSize?: number;
}

export class ToolsPreAuditGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPreAuditGetGet(request: OpenApi2ToolsPreAuditGetGetRequest): Promise<ToolsPreAuditGetV2Response> {
    const response = await this.openApi2ToolsPreAuditGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPreAuditGetGetWithHttpInfo(request: OpenApi2ToolsPreAuditGetGetRequest): Promise<ApiResponse<ToolsPreAuditGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsPreAuditGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPreAuditGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/pre_audit/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filter", value: request.filter },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


