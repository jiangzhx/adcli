// Generated from oceanengine/ad_open_sdk_go api/api_tool_quick_app_management_quick_app_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolQuickAppManagementQuickAppGetV2Response, ToolQuickAppManagementQuickAppGetV2Status, ToolQuickAppManagementQuickAppGetV2UpdateTime } from "../models/index";


export interface ToolQuickAppManagementQuickAppGetV2ApiOpenApi2ToolQuickAppManagementQuickAppGetGetRequest {
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

  async openApi2ToolQuickAppManagementQuickAppGetGet(request: ToolQuickAppManagementQuickAppGetV2ApiOpenApi2ToolQuickAppManagementQuickAppGetGetRequest): Promise<ToolQuickAppManagementQuickAppGetV2Response> {
    const response = await this.openApi2ToolQuickAppManagementQuickAppGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolQuickAppManagementQuickAppGetGetWithHttpInfo(request: ToolQuickAppManagementQuickAppGetV2ApiOpenApi2ToolQuickAppManagementQuickAppGetGetRequest): Promise<ApiResponse<ToolQuickAppManagementQuickAppGetV2Response>> {
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


