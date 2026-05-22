// Generated from tencentad/marketing-api-go-sdk pkg/api/api_videomaker_tasks.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { VideomakerTasksGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface VideomakerTasksApiGetRequest {
  accountId: number | string;
  taskId: string;
  fields?: unknown;
}


export class VideomakerTasksApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: VideomakerTasksApiGetRequest): Promise<VideomakerTasksGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: VideomakerTasksApiGetRequest): Promise<ApiResponse<VideomakerTasksGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<VideomakerTasksGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/videomaker_tasks/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "task_id", value: request.taskId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


