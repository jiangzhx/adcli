// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarStarAdUniteTaskListV2Filtering, StarStarAdUniteTaskListV2Response } from "../models";


export class StarStarAdUniteTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarStarAdUniteTaskListGet(starId: number, page: number, pageSize: number, filtering: StarStarAdUniteTaskListV2Filtering): Promise<StarStarAdUniteTaskListV2Response> {
    const response = await this.openApi2StarStarAdUniteTaskListGetWithHttpInfo(starId, page, pageSize, filtering);
    return response.data;
  }

  async openApi2StarStarAdUniteTaskListGetWithHttpInfo(starId: number, page: number, pageSize: number, filtering: StarStarAdUniteTaskListV2Filtering): Promise<ApiResponse<StarStarAdUniteTaskListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarStarAdUniteTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarStarAdUniteTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/star/star_ad_unite_task/list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


