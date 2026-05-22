// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseAiTaskAddRequest, MuseAiTaskAddResponseData, MuseAiTaskGetResponseData } from "../models";

export interface V3MuseAiTaskApiAddRequest {
  data: MuseAiTaskAddRequest;
}

export interface V3MuseAiTaskApiGetRequest {
  accountId: number | string;
  taskId: number | string;
  fields?: unknown;
}


export class V3MuseAiTaskApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3MuseAiTaskApiAddRequest): Promise<MuseAiTaskAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3MuseAiTaskApiAddRequest): Promise<ApiResponse<MuseAiTaskAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MuseAiTaskAddResponseData>({
      method: "POST",
      path: "/muse_ai_task/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3MuseAiTaskApiGetRequest): Promise<MuseAiTaskGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3MuseAiTaskApiGetRequest): Promise<ApiResponse<MuseAiTaskGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MuseAiTaskGetResponseData>({
      method: "GET",
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


