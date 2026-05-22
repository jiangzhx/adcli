// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsOrangeSiteGetV30Filtering, ToolsOrangeSiteGetV30MultiAssetType, ToolsOrangeSiteGetV30OptimizeGoal, ToolsOrangeSiteGetV30Response, ToolsOrangeSiteGetV30Status } from "../models";


export interface OpenApiV30ToolsOrangeSiteGetGetRequest {
  advertiserId: number;
  page: number;
  pageSize: number;
  optimizeGoal: ToolsOrangeSiteGetV30OptimizeGoal;
  status?: ToolsOrangeSiteGetV30Status;
  filtering?: ToolsOrangeSiteGetV30Filtering;
  multiAssetType?: ToolsOrangeSiteGetV30MultiAssetType;
}

export class ToolsOrangeSiteGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsOrangeSiteGetGet(request: OpenApiV30ToolsOrangeSiteGetGetRequest): Promise<ToolsOrangeSiteGetV30Response> {
    const response = await this.openApiV30ToolsOrangeSiteGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsOrangeSiteGetGetWithHttpInfo(request: OpenApiV30ToolsOrangeSiteGetGetRequest): Promise<ApiResponse<ToolsOrangeSiteGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsOrangeSiteGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ToolsOrangeSiteGetGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30ToolsOrangeSiteGetGet");
    }

    if (request.optimizeGoal == null) {
      throw new ApiException("Missing the required parameter 'optimizeGoal' when calling openApiV30ToolsOrangeSiteGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsOrangeSiteGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/orange_site/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "status", value: request.status },
        { name: "filtering", value: request.filtering },
        { name: "optimize_goal", value: request.optimizeGoal },
        { name: "multi_asset_type", value: request.multiAssetType }
      ]
    });
  }
}


