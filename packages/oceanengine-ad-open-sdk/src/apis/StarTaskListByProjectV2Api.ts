// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarTaskListByProjectV2Response } from "../models";


export interface OpenApi2StarTaskListByProjectGetRequest {
  starId: number | string;
  projectId: number | string;
  page: number;
  limit: number;
}

export class StarTaskListByProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarTaskListByProjectGet(request: OpenApi2StarTaskListByProjectGetRequest): Promise<StarTaskListByProjectV2Response> {
    const response = await this.openApi2StarTaskListByProjectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarTaskListByProjectGetWithHttpInfo(request: OpenApi2StarTaskListByProjectGetRequest): Promise<ApiResponse<StarTaskListByProjectV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarTaskListByProjectGet");
    }

    if (request.projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApi2StarTaskListByProjectGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarTaskListByProjectGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarTaskListByProjectGet");
    }
    return this.apiClient.requestWithHttpInfo<StarTaskListByProjectV2Response>({
      method: "GET",
      path: "/open_api/2/star/task/list_by_project/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "project_id", value: request.projectId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


