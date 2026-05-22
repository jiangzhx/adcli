// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsOrangeSiteGetV30Filtering, ToolsOrangeSiteGetV30MultiAssetType, ToolsOrangeSiteGetV30OptimizeGoal, ToolsOrangeSiteGetV30Response, ToolsOrangeSiteGetV30Status } from "../models";


export class ToolsOrangeSiteGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsOrangeSiteGetGet(advertiserId: number, page: number, pageSize: number, optimizeGoal: ToolsOrangeSiteGetV30OptimizeGoal, status: ToolsOrangeSiteGetV30Status, filtering: ToolsOrangeSiteGetV30Filtering, multiAssetType: ToolsOrangeSiteGetV30MultiAssetType): Promise<ToolsOrangeSiteGetV30Response> {
    const response = await this.openApiV30ToolsOrangeSiteGetGetWithHttpInfo(advertiserId, page, pageSize, optimizeGoal, status, filtering, multiAssetType);
    return response.data;
  }

  async openApiV30ToolsOrangeSiteGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, optimizeGoal: ToolsOrangeSiteGetV30OptimizeGoal, status: ToolsOrangeSiteGetV30Status, filtering: ToolsOrangeSiteGetV30Filtering, multiAssetType: ToolsOrangeSiteGetV30MultiAssetType): Promise<ApiResponse<ToolsOrangeSiteGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsOrangeSiteGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ToolsOrangeSiteGetGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30ToolsOrangeSiteGetGet");
    }

    if (optimizeGoal == null) {
      throw new ApiException("Missing the required parameter 'optimizeGoal' when calling openApiV30ToolsOrangeSiteGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsOrangeSiteGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/orange_site/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "status", value: status },
        { name: "filtering", value: filtering },
        { name: "optimize_goal", value: optimizeGoal },
        { name: "multi_asset_type", value: multiAssetType }
      ]
    });
  }
}


