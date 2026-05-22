// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarItemAuthorGetV2Response } from "../models";


export interface OpenApi2StarItemAuthorGetGetRequest {
  starId: number;
  itemIds: number[];
}

export class StarItemAuthorGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarItemAuthorGetGet(request: OpenApi2StarItemAuthorGetGetRequest): Promise<StarItemAuthorGetV2Response> {
    const response = await this.openApi2StarItemAuthorGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarItemAuthorGetGetWithHttpInfo(request: OpenApi2StarItemAuthorGetGetRequest): Promise<ApiResponse<StarItemAuthorGetV2Response>> {
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
        { name: "item_ids", value: request.itemIds, collectionFormat: "csv" }
      ]
    });
  }
}


