// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicMixcutTaskSaveV30Request, AicMixcutTaskSaveV30Response } from "../models";


export interface OpenApiV30AicMixcutTaskSavePostRequest {
  aicMixcutTaskSaveV30Request?: AicMixcutTaskSaveV30Request;
}

export class AicMixcutTaskSaveV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicMixcutTaskSavePost(request: OpenApiV30AicMixcutTaskSavePostRequest): Promise<AicMixcutTaskSaveV30Response> {
    const response = await this.openApiV30AicMixcutTaskSavePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicMixcutTaskSavePostWithHttpInfo(request: OpenApiV30AicMixcutTaskSavePostRequest): Promise<ApiResponse<AicMixcutTaskSaveV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicMixcutTaskSaveV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/mixcut_task/save/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.aicMixcutTaskSaveV30Request
    });
  }
}


