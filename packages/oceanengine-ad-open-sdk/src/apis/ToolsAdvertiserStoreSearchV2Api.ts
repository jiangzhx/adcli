// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAdvertiserStoreSearchV2Response, ToolsAdvertiserStoreSearchV2Type } from "../models";


export interface OpenApi2ToolsAdvertiserStoreSearchGetRequest {
  advertiserId?: number | string;
  page?: number;
  pageSize?: number;
  type_?: ToolsAdvertiserStoreSearchV2Type;
}

export class ToolsAdvertiserStoreSearchV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAdvertiserStoreSearchGet(request: OpenApi2ToolsAdvertiserStoreSearchGetRequest): Promise<ToolsAdvertiserStoreSearchV2Response> {
    const response = await this.openApi2ToolsAdvertiserStoreSearchGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAdvertiserStoreSearchGetWithHttpInfo(request: OpenApi2ToolsAdvertiserStoreSearchGetRequest): Promise<ApiResponse<ToolsAdvertiserStoreSearchV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAdvertiserStoreSearchV2Response>({
      method: "GET",
      path: "/open_api/2/tools/advertiser_store/search/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "type", value: request.type_ }
      ]
    });
  }
}


