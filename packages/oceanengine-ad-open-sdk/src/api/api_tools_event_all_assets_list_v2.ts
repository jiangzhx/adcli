// Generated from oceanengine/ad_open_sdk_go api/api_tools_event_all_assets_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEventAllAssetsListV2Filtering, ToolsEventAllAssetsListV2Response } from "../models/index";


export interface ToolsEventAllAssetsListV2ApiOpenApi2ToolsEventAllAssetsListGetRequest {
  advertiserId: number | string;
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

  async openApi2ToolsEventAllAssetsListGet(request: ToolsEventAllAssetsListV2ApiOpenApi2ToolsEventAllAssetsListGetRequest): Promise<ToolsEventAllAssetsListV2Response> {
    const response = await this.openApi2ToolsEventAllAssetsListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEventAllAssetsListGetWithHttpInfo(request: ToolsEventAllAssetsListV2ApiOpenApi2ToolsEventAllAssetsListGetRequest): Promise<ApiResponse<ToolsEventAllAssetsListV2Response>> {
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


