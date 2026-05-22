// Generated from oceanengine/ad_open_sdk_go api/api_aic_material_push_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicMaterialPushV30Request, AicMaterialPushV30Response } from "../models/index";


export interface AicMaterialPushV30ApiOpenApiV30AicMaterialPushPostRequest {
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

  async openApiV30AicMaterialPushPost(request: AicMaterialPushV30ApiOpenApiV30AicMaterialPushPostRequest): Promise<AicMaterialPushV30Response> {
    const response = await this.openApiV30AicMaterialPushPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicMaterialPushPostWithHttpInfo(request: AicMaterialPushV30ApiOpenApiV30AicMaterialPushPostRequest): Promise<ApiResponse<AicMaterialPushV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicMaterialPushV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/material/push/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.aicMaterialPushV30Request
    });
  }
}


