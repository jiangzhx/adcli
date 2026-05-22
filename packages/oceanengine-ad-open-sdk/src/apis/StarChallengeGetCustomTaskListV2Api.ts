// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeGetCustomTaskListV2Response } from "../models";


export interface OpenApi2StarChallengeGetCustomTaskListGetRequest {
  starId: number;
  taskCategory: number;
  page: number;
  pageSize: number;
}

export class StarChallengeGetCustomTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeGetCustomTaskListGet(request: OpenApi2StarChallengeGetCustomTaskListGetRequest): Promise<StarChallengeGetCustomTaskListV2Response> {
    const response = await this.openApi2StarChallengeGetCustomTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeGetCustomTaskListGetWithHttpInfo(request: OpenApi2StarChallengeGetCustomTaskListGetRequest): Promise<ApiResponse<StarChallengeGetCustomTaskListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeGetCustomTaskListGet");
    }

    if (request.taskCategory == null) {
      throw new ApiException("Missing the required parameter 'taskCategory' when calling openApi2StarChallengeGetCustomTaskListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarChallengeGetCustomTaskListGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarChallengeGetCustomTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeGetCustomTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/get_custom_task_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_category", value: request.taskCategory },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


