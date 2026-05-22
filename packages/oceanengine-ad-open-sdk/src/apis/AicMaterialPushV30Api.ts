// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicMaterialPushV30Request, AicMaterialPushV30Response } from "../models";


export interface OpenApiV30AicMaterialPushPostRequest {
  aicMaterialPushV30Request?: AicMaterialPushV30Request;
}

export class AicMaterialPushV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicMaterialPushPost(request: OpenApiV30AicMaterialPushPostRequest): Promise<AicMaterialPushV30Response> {
    const response = await this.openApiV30AicMaterialPushPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicMaterialPushPostWithHttpInfo(request: OpenApiV30AicMaterialPushPostRequest): Promise<ApiResponse<AicMaterialPushV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicMaterialPushV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/material/push/",
      queryParams: [

      ],
      body: request.aicMaterialPushV30Request
    });
  }
}


