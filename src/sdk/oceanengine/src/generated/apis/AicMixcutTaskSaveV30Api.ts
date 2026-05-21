// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AicMixcutTaskSaveV30Request, AicMixcutTaskSaveV30Response } from "../models";


export class AicMixcutTaskSaveV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicMixcutTaskSavePost(aicMixcutTaskSaveV30Request: AicMixcutTaskSaveV30Request): Promise<AicMixcutTaskSaveV30Response> {
    const response = await this.openApiV30AicMixcutTaskSavePostWithHttpInfo(aicMixcutTaskSaveV30Request);
    return response.data;
  }

  async openApiV30AicMixcutTaskSavePostWithHttpInfo(aicMixcutTaskSaveV30Request: AicMixcutTaskSaveV30Request): Promise<ApiResponse<AicMixcutTaskSaveV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicMixcutTaskSaveV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/mixcut_task/save/",
      queryParams: [

      ],
      body: aicMixcutTaskSaveV30Request
    });
  }
}


