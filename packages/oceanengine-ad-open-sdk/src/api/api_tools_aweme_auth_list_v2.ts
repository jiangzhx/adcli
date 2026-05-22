// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_auth_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeAuthListV2Filtering, ToolsAwemeAuthListV2Response } from "../models/index";


export interface ToolsAwemeAuthListV2ApiOpenApi2ToolsAwemeAuthListGetRequest {
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

  async openApi2ToolsAwemeAuthListGet(request: ToolsAwemeAuthListV2ApiOpenApi2ToolsAwemeAuthListGetRequest): Promise<ToolsAwemeAuthListV2Response> {
    const response = await this.openApi2ToolsAwemeAuthListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthListGetWithHttpInfo(request: ToolsAwemeAuthListV2ApiOpenApi2ToolsAwemeAuthListGetRequest): Promise<ApiResponse<ToolsAwemeAuthListV2Response>> {
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


