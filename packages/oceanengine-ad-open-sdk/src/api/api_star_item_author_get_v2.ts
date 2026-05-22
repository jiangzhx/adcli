// Generated from oceanengine/ad_open_sdk_go api/api_star_item_author_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarItemAuthorGetV2Response } from "../models/index";


export interface StarItemAuthorGetV2ApiOpenApi2StarItemAuthorGetGetRequest {
  starId: number | string;
  itemIds: number | string[];
}

export class StarItemAuthorGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarItemAuthorGetGet(request: StarItemAuthorGetV2ApiOpenApi2StarItemAuthorGetGetRequest): Promise<StarItemAuthorGetV2Response> {
    const response = await this.openApi2StarItemAuthorGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarItemAuthorGetGetWithHttpInfo(request: StarItemAuthorGetV2ApiOpenApi2StarItemAuthorGetGetRequest): Promise<ApiResponse<StarItemAuthorGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarItemAuthorGetGet");
    }

    if (request.itemIds == null) {
      throw new ApiException("Missing the required parameter 'itemIds' when calling openApi2StarItemAuthorGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarItemAuthorGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/item/author/get/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "item_ids", value: request.itemIds }
      ]
    });
  }
}


