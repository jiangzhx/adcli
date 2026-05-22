// Generated from oceanengine/ad_open_sdk_go api/api_aic_mixcut_task_result_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicMixcutTaskResultGetV30AccountType, AicMixcutTaskResultGetV30Response } from "../models/index";


export interface AicMixcutTaskResultGetV30ApiOpenApiV30AicMixcutTaskResultGetGetRequest {
  accountId: number | string;
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

  async openApiV30AicMixcutTaskResultGetGet(request: AicMixcutTaskResultGetV30ApiOpenApiV30AicMixcutTaskResultGetGetRequest): Promise<AicMixcutTaskResultGetV30Response> {
    const response = await this.openApiV30AicMixcutTaskResultGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicMixcutTaskResultGetGetWithHttpInfo(request: AicMixcutTaskResultGetV30ApiOpenApiV30AicMixcutTaskResultGetGetRequest): Promise<ApiResponse<AicMixcutTaskResultGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
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


