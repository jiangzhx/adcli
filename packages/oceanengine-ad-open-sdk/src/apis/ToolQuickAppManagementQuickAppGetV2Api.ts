// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolQuickAppManagementQuickAppGetV2Response, ToolQuickAppManagementQuickAppGetV2Status, ToolQuickAppManagementQuickAppGetV2UpdateTime } from "../models";


export interface OpenApi2ToolQuickAppManagementQuickAppGetGetRequest {
  advertiserId: number | string;
  status?: ToolQuickAppManagementQuickAppGetV2Status[];
  page?: number;
  pageSize?: number;
  updateTime?: ToolQuickAppManagementQuickAppGetV2UpdateTime;
  searchKey?: string;
  quickAppIds?: number | string[];
}

export class ToolQuickAppManagementQuickAppGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolQuickAppManagementQuickAppGetGet(request: OpenApi2ToolQuickAppManagementQuickAppGetGetRequest): Promise<ToolQuickAppManagementQuickAppGetV2Response> {
    const response = await this.openApi2ToolQuickAppManagementQuickAppGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolQuickAppManagementQuickAppGetGetWithHttpInfo(request: OpenApi2ToolQuickAppManagementQuickAppGetGetRequest): Promise<ApiResponse<ToolQuickAppManagementQuickAppGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolQuickAppManagementQuickAppGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolQuickAppManagementQuickAppGetV2Response>({
      method: "GET",
      path: "/open_api/2/tool/quick_app_management/quick_app/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "status", value: request.status, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "update_time", value: request.updateTime },
        { name: "search_key", value: request.searchKey },
        { name: "quick_app_ids", value: request.quickAppIds, collectionFormat: "csv" }
      ]
    });
  }
}


