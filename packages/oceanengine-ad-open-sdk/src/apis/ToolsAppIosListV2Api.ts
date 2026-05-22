// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppIosListV2Filtering, ToolsAppIosListV2Response } from "../models";


export interface OpenApi2ToolsAppIosListGetRequest {
  advertiserId?: number | string;
  filtering?: ToolsAppIosListV2Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsAppIosListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppIosListGet(request: OpenApi2ToolsAppIosListGetRequest): Promise<ToolsAppIosListV2Response> {
    const response = await this.openApi2ToolsAppIosListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppIosListGetWithHttpInfo(request: OpenApi2ToolsAppIosListGetRequest): Promise<ApiResponse<ToolsAppIosListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppIosListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app/ios/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


