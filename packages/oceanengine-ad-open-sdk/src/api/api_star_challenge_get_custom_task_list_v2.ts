// Generated from oceanengine/ad_open_sdk_go api/api_star_challenge_get_custom_task_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarChallengeGetCustomTaskListV2Response } from "../models/index";


export interface StarChallengeGetCustomTaskListV2ApiOpenApi2StarChallengeGetCustomTaskListGetRequest {
  starId: number | string;
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

  async openApi2StarChallengeGetCustomTaskListGet(request: StarChallengeGetCustomTaskListV2ApiOpenApi2StarChallengeGetCustomTaskListGetRequest): Promise<StarChallengeGetCustomTaskListV2Response> {
    const response = await this.openApi2StarChallengeGetCustomTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarChallengeGetCustomTaskListGetWithHttpInfo(request: StarChallengeGetCustomTaskListV2ApiOpenApi2StarChallengeGetCustomTaskListGetRequest): Promise<ApiResponse<StarChallengeGetCustomTaskListV2Response>> {
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


