// Generated from oceanengine/ad_open_sdk_go api/api_tools_pre_audit_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPreAuditGetV2Filter, ToolsPreAuditGetV2Response } from "../models/index";


export interface ToolsPreAuditGetV2ApiOpenApi2ToolsPreAuditGetGetRequest {
  advertiserId: number | string;
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

  async openApi2ToolsPreAuditGetGet(request: ToolsPreAuditGetV2ApiOpenApi2ToolsPreAuditGetGetRequest): Promise<ToolsPreAuditGetV2Response> {
    const response = await this.openApi2ToolsPreAuditGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPreAuditGetGetWithHttpInfo(request: ToolsPreAuditGetV2ApiOpenApi2ToolsPreAuditGetGetRequest): Promise<ApiResponse<ToolsPreAuditGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


