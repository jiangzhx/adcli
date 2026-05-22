// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPreAuditGetV2Filter, ToolsPreAuditGetV2Response } from "../models";


export class ToolsPreAuditGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPreAuditGetGet(advertiserId: number, filter: ToolsPreAuditGetV2Filter, page: number, pageSize: number): Promise<ToolsPreAuditGetV2Response> {
    const response = await this.openApi2ToolsPreAuditGetGetWithHttpInfo(advertiserId, filter, page, pageSize);
    return response.data;
  }

  async openApi2ToolsPreAuditGetGetWithHttpInfo(advertiserId: number, filter: ToolsPreAuditGetV2Filter, page: number, pageSize: number): Promise<ApiResponse<ToolsPreAuditGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsPreAuditGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPreAuditGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/pre_audit/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filter", value: filter },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


