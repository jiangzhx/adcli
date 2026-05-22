// Generated from oceanengine/ad_open_sdk_go api/api_tools_asset_link_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAssetLinkListV30Filtering, ToolsAssetLinkListV30Response } from "../models/index";


export interface ToolsAssetLinkListV30ApiOpenApiV30ToolsAssetLinkListGetRequest {
  advertiserId: number | string;
  filtering: ToolsAssetLinkListV30Filtering;
  page?: number;
  pageSize?: number;
  cursor?: number;
  count?: number;
}

export class ToolsAssetLinkListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAssetLinkListGet(request: ToolsAssetLinkListV30ApiOpenApiV30ToolsAssetLinkListGetRequest): Promise<ToolsAssetLinkListV30Response> {
    const response = await this.openApiV30ToolsAssetLinkListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAssetLinkListGetWithHttpInfo(request: ToolsAssetLinkListV30ApiOpenApiV30ToolsAssetLinkListGetRequest): Promise<ApiResponse<ToolsAssetLinkListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsAssetLinkListGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30ToolsAssetLinkListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAssetLinkListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/asset_link/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


