// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeSimilarAuthorSearchV2Behaviors, ToolsAwemeSimilarAuthorSearchV2Response } from "../models";


export interface OpenApi2ToolsAwemeSimilarAuthorSearchGetRequest {
  advertiserId: number;
  awemeId: string;
  behaviors?: ToolsAwemeSimilarAuthorSearchV2Behaviors[];
}

export class ToolsAwemeSimilarAuthorSearchV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeSimilarAuthorSearchGet(request: OpenApi2ToolsAwemeSimilarAuthorSearchGetRequest): Promise<ToolsAwemeSimilarAuthorSearchV2Response> {
    const response = await this.openApi2ToolsAwemeSimilarAuthorSearchGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeSimilarAuthorSearchGetWithHttpInfo(request: OpenApi2ToolsAwemeSimilarAuthorSearchGetRequest): Promise<ApiResponse<ToolsAwemeSimilarAuthorSearchV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAwemeSimilarAuthorSearchGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApi2ToolsAwemeSimilarAuthorSearchGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAwemeSimilarAuthorSearchV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_similar_author_search/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "behaviors", value: request.behaviors, collectionFormat: "csv" }
      ]
    });
  }
}


