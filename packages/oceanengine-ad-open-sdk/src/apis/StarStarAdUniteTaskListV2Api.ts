// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarStarAdUniteTaskListV2Filtering, StarStarAdUniteTaskListV2Response } from "../models";


export interface OpenApi2StarStarAdUniteTaskListGetRequest {
  starId: number;
  page?: number;
  pageSize?: number;
  filtering?: StarStarAdUniteTaskListV2Filtering;
}

export class StarStarAdUniteTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarStarAdUniteTaskListGet(request: OpenApi2StarStarAdUniteTaskListGetRequest): Promise<StarStarAdUniteTaskListV2Response> {
    const response = await this.openApi2StarStarAdUniteTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarStarAdUniteTaskListGetWithHttpInfo(request: OpenApi2StarStarAdUniteTaskListGetRequest): Promise<ApiResponse<StarStarAdUniteTaskListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarStarAdUniteTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarStarAdUniteTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/star/star_ad_unite_task/list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


