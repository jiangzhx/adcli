// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEventAllAssetsListV2Filtering, ToolsEventAllAssetsListV2Response } from "../models";


export interface OpenApi2ToolsEventAllAssetsListGetRequest {
  advertiserId: number;
  filtering?: ToolsEventAllAssetsListV2Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsEventAllAssetsListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEventAllAssetsListGet(request: OpenApi2ToolsEventAllAssetsListGetRequest): Promise<ToolsEventAllAssetsListV2Response> {
    const response = await this.openApi2ToolsEventAllAssetsListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEventAllAssetsListGetWithHttpInfo(request: OpenApi2ToolsEventAllAssetsListGetRequest): Promise<ApiResponse<ToolsEventAllAssetsListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsEventAllAssetsListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventAllAssetsListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/event/all_assets/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


