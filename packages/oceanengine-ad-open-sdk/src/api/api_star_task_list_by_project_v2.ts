// Generated from oceanengine/ad_open_sdk_go api/api_star_task_list_by_project_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarTaskListByProjectV2Response } from "../models/index";


export interface StarTaskListByProjectV2ApiOpenApi2StarTaskListByProjectGetRequest {
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

  async openApi2StarTaskListByProjectGet(request: StarTaskListByProjectV2ApiOpenApi2StarTaskListByProjectGetRequest): Promise<StarTaskListByProjectV2Response> {
    const response = await this.openApi2StarTaskListByProjectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarTaskListByProjectGetWithHttpInfo(request: StarTaskListByProjectV2ApiOpenApi2StarTaskListByProjectGetRequest): Promise<ApiResponse<StarTaskListByProjectV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.projectId == null) {
      throw new ApiException("projectId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.page != null && Number(request.page) > 10000) {
      throw new ApiException("page must be less than 10000");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
    }

    if (request.limit != null && Number(request.limit) < 1) {
      throw new ApiException("limit must be greater than 1");
    }

    if (request.limit != null && Number(request.limit) > 50) {
      throw new ApiException("limit must be less than 50");
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


