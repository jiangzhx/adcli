// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AicMixcutTaskResultGetV30AccountType, AicMixcutTaskResultGetV30Response } from "../models";


export class AicMixcutTaskResultGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicMixcutTaskResultGetGet(accountId: number, accountType: AicMixcutTaskResultGetV30AccountType, taskId: string): Promise<AicMixcutTaskResultGetV30Response> {
    const response = await this.openApiV30AicMixcutTaskResultGetGetWithHttpInfo(accountId, accountType, taskId);
    return response.data;
  }

  async openApiV30AicMixcutTaskResultGetGetWithHttpInfo(accountId: number, accountType: AicMixcutTaskResultGetV30AccountType, taskId: string): Promise<ApiResponse<AicMixcutTaskResultGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30AicMixcutTaskResultGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AicMixcutTaskResultGetGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApiV30AicMixcutTaskResultGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AicMixcutTaskResultGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/aic/mixcut_task/result/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "task_id", value: taskId }
      ]
    });
  }
}


