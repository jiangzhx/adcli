// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeAuthListV2Filtering, ToolsAwemeAuthListV2Response } from "../models";


export interface OpenApi2ToolsAwemeAuthListGetRequest {
  advertiserId: number | string;
  filtering?: ToolsAwemeAuthListV2Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsAwemeAuthListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthListGet(request: OpenApi2ToolsAwemeAuthListGetRequest): Promise<ToolsAwemeAuthListV2Response> {
    const response = await this.openApi2ToolsAwemeAuthListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthListGetWithHttpInfo(request: OpenApi2ToolsAwemeAuthListGetRequest): Promise<ApiResponse<ToolsAwemeAuthListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAwemeAuthListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_auth_list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


