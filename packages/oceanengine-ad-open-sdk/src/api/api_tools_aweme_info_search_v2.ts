// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_info_search_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeInfoSearchV2Behaviors, ToolsAwemeInfoSearchV2Response } from "../models/index";


export interface ToolsAwemeInfoSearchV2ApiOpenApi2ToolsAwemeInfoSearchGetRequest {
  advertiserId: number | string;
  queryWord: string;
  behaviors?: ToolsAwemeInfoSearchV2Behaviors[];
}

export class ToolsAwemeInfoSearchV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeInfoSearchGet(request: ToolsAwemeInfoSearchV2ApiOpenApi2ToolsAwemeInfoSearchGetRequest): Promise<ToolsAwemeInfoSearchV2Response> {
    const response = await this.openApi2ToolsAwemeInfoSearchGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeInfoSearchGetWithHttpInfo(request: ToolsAwemeInfoSearchV2ApiOpenApi2ToolsAwemeInfoSearchGetRequest): Promise<ApiResponse<ToolsAwemeInfoSearchV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.queryWord == null) {
      throw new ApiException("queryWord is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAwemeInfoSearchV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_info_search/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "query_word", value: request.queryWord },
        { name: "behaviors", value: request.behaviors }
      ]
    });
  }
}


