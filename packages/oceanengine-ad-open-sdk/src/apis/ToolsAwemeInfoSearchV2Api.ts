// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeInfoSearchV2Behaviors, ToolsAwemeInfoSearchV2Response } from "../models";


export interface OpenApi2ToolsAwemeInfoSearchGetRequest {
  advertiserId: number;
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

  async openApi2ToolsAwemeInfoSearchGet(request: OpenApi2ToolsAwemeInfoSearchGetRequest): Promise<ToolsAwemeInfoSearchV2Response> {
    const response = await this.openApi2ToolsAwemeInfoSearchGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeInfoSearchGetWithHttpInfo(request: OpenApi2ToolsAwemeInfoSearchGetRequest): Promise<ApiResponse<ToolsAwemeInfoSearchV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAwemeInfoSearchGet");
    }

    if (request.queryWord == null) {
      throw new ApiException("Missing the required parameter 'queryWord' when calling openApi2ToolsAwemeInfoSearchGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAwemeInfoSearchV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_info_search/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "query_word", value: request.queryWord },
        { name: "behaviors", value: request.behaviors, collectionFormat: "csv" }
      ]
    });
  }
}


