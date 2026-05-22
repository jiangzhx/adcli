// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_muse_ai_task.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MuseAiTaskAddRequest, MuseAiTaskAddResponseData, MuseAiTaskGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MuseAiTaskApiAddRequest {
  data: MuseAiTaskAddRequest;
}

export interface MuseAiTaskApiGetRequest {
  accountId: number | string;
  taskId: number | string;
  fields?: unknown;
}


export class MuseAiTaskApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MuseAiTaskApiAddRequest): Promise<MuseAiTaskAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MuseAiTaskApiAddRequest): Promise<ApiResponse<MuseAiTaskAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MuseAiTaskAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/muse_ai_task/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: MuseAiTaskApiGetRequest): Promise<MuseAiTaskGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MuseAiTaskApiGetRequest): Promise<ApiResponse<MuseAiTaskGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MuseAiTaskGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/muse_ai_task/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "task_id", value: request.taskId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


