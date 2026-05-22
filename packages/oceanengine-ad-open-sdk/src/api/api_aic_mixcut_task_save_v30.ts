// Generated from oceanengine/ad_open_sdk_go api/api_aic_mixcut_task_save_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicMixcutTaskSaveV30Request, AicMixcutTaskSaveV30Response } from "../models/index";


export interface AicMixcutTaskSaveV30ApiOpenApiV30AicMixcutTaskSavePostRequest {
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

  async openApiV30AicMixcutTaskSavePost(request: AicMixcutTaskSaveV30ApiOpenApiV30AicMixcutTaskSavePostRequest): Promise<AicMixcutTaskSaveV30Response> {
    const response = await this.openApiV30AicMixcutTaskSavePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicMixcutTaskSavePostWithHttpInfo(request: AicMixcutTaskSaveV30ApiOpenApiV30AicMixcutTaskSavePostRequest): Promise<ApiResponse<AicMixcutTaskSaveV30Response>> {

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


