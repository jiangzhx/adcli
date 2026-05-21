// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolQuickAppManagementQuickAppGetV2Response, ToolQuickAppManagementQuickAppGetV2Status, ToolQuickAppManagementQuickAppGetV2UpdateTime } from "../models";


export class ToolQuickAppManagementQuickAppGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolQuickAppManagementQuickAppGetGet(advertiserId: number, status: ToolQuickAppManagementQuickAppGetV2Status[], page: number, pageSize: number, updateTime: ToolQuickAppManagementQuickAppGetV2UpdateTime, searchKey: string, quickAppIds: number[]): Promise<ToolQuickAppManagementQuickAppGetV2Response> {
    const response = await this.openApi2ToolQuickAppManagementQuickAppGetGetWithHttpInfo(advertiserId, status, page, pageSize, updateTime, searchKey, quickAppIds);
    return response.data;
  }

  async openApi2ToolQuickAppManagementQuickAppGetGetWithHttpInfo(advertiserId: number, status: ToolQuickAppManagementQuickAppGetV2Status[], page: number, pageSize: number, updateTime: ToolQuickAppManagementQuickAppGetV2UpdateTime, searchKey: string, quickAppIds: number[]): Promise<ApiResponse<ToolQuickAppManagementQuickAppGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolQuickAppManagementQuickAppGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolQuickAppManagementQuickAppGetV2Response>({
      method: "GET",
      path: "/open_api/2/tool/quick_app_management/quick_app/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "update_time", value: updateTime },
        { name: "search_key", value: searchKey },
        { name: "status", value: status, collectionFormat: "csv" },
        { name: "quick_app_ids", value: quickAppIds, collectionFormat: "csv" }
      ]
    });
  }
}


