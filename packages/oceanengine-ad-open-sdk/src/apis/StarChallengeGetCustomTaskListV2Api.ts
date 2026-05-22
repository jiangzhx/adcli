// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarChallengeGetCustomTaskListV2Response } from "../models";


export class StarChallengeGetCustomTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarChallengeGetCustomTaskListGet(starId: number, taskCategory: number, page: number, pageSize: number): Promise<StarChallengeGetCustomTaskListV2Response> {
    const response = await this.openApi2StarChallengeGetCustomTaskListGetWithHttpInfo(starId, taskCategory, page, pageSize);
    return response.data;
  }

  async openApi2StarChallengeGetCustomTaskListGetWithHttpInfo(starId: number, taskCategory: number, page: number, pageSize: number): Promise<ApiResponse<StarChallengeGetCustomTaskListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarChallengeGetCustomTaskListGet");
    }

    if (taskCategory == null) {
      throw new ApiException("Missing the required parameter 'taskCategory' when calling openApi2StarChallengeGetCustomTaskListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarChallengeGetCustomTaskListGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarChallengeGetCustomTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarChallengeGetCustomTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/star/challenge/get_custom_task_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_category", value: taskCategory },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


