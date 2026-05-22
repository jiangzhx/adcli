// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAssetLinkListV30Filtering, ToolsAssetLinkListV30Response } from "../models";


export class ToolsAssetLinkListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAssetLinkListGet(advertiserId: number, filtering: ToolsAssetLinkListV30Filtering, page: number, pageSize: number, cursor: number, count: number): Promise<ToolsAssetLinkListV30Response> {
    const response = await this.openApiV30ToolsAssetLinkListGetWithHttpInfo(advertiserId, filtering, page, pageSize, cursor, count);
    return response.data;
  }

  async openApiV30ToolsAssetLinkListGetWithHttpInfo(advertiserId: number, filtering: ToolsAssetLinkListV30Filtering, page: number, pageSize: number, cursor: number, count: number): Promise<ApiResponse<ToolsAssetLinkListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsAssetLinkListGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30ToolsAssetLinkListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAssetLinkListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/asset_link/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


