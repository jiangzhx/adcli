// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarTaskListByProjectV2Response } from "../models";


export class StarTaskListByProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarTaskListByProjectGet(starId: number, projectId: number, page: number, limit: number): Promise<StarTaskListByProjectV2Response> {
    const response = await this.openApi2StarTaskListByProjectGetWithHttpInfo(starId, projectId, page, limit);
    return response.data;
  }

  async openApi2StarTaskListByProjectGetWithHttpInfo(starId: number, projectId: number, page: number, limit: number): Promise<ApiResponse<StarTaskListByProjectV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarTaskListByProjectGet");
    }

    if (projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApi2StarTaskListByProjectGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarTaskListByProjectGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarTaskListByProjectGet");
    }
    return this.apiClient.requestWithHttpInfo<StarTaskListByProjectV2Response>({
      method: "GET",
      path: "/open_api/2/star/task/list_by_project/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "project_id", value: projectId },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


