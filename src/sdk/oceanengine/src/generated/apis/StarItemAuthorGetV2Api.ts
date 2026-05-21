// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarItemAuthorGetV2Response } from "../models";


export class StarItemAuthorGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarItemAuthorGetGet(starId: number, itemIds: number[]): Promise<StarItemAuthorGetV2Response> {
    const response = await this.openApi2StarItemAuthorGetGetWithHttpInfo(starId, itemIds);
    return response.data;
  }

  async openApi2StarItemAuthorGetGetWithHttpInfo(starId: number, itemIds: number[]): Promise<ApiResponse<StarItemAuthorGetV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarItemAuthorGetGet");
    }

    if (itemIds == null) {
      throw new ApiException("Missing the required parameter 'itemIds' when calling openApi2StarItemAuthorGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarItemAuthorGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/item/author/get/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "item_ids", value: itemIds, collectionFormat: "csv" }
      ]
    });
  }
}


