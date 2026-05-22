// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicMixcutTaskResultGetV30AccountType, AicMixcutTaskResultGetV30Response } from "../models";


export interface OpenApiV30AicMixcutTaskResultGetGetRequest {
  accountId: number;
  accountType: AicMixcutTaskResultGetV30AccountType;
  taskId: string;
}

export class AicMixcutTaskResultGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicMixcutTaskResultGetGet(request: OpenApiV30AicMixcutTaskResultGetGetRequest): Promise<AicMixcutTaskResultGetV30Response> {
    const response = await this.openApiV30AicMixcutTaskResultGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicMixcutTaskResultGetGetWithHttpInfo(request: OpenApiV30AicMixcutTaskResultGetGetRequest): Promise<ApiResponse<AicMixcutTaskResultGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30AicMixcutTaskResultGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AicMixcutTaskResultGetGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApiV30AicMixcutTaskResultGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AicMixcutTaskResultGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/aic/mixcut_task/result/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "task_id", value: request.taskId }
      ]
    });
  }
}


