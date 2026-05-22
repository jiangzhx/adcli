// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialStatusUpdateV30Request, MaterialStatusUpdateV30Response } from "../models";


export class MaterialStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30MaterialStatusUpdatePost(materialStatusUpdateV30Request: MaterialStatusUpdateV30Request): Promise<MaterialStatusUpdateV30Response> {
    const response = await this.openApiV30MaterialStatusUpdatePostWithHttpInfo(materialStatusUpdateV30Request);
    return response.data;
  }

  async openApiV30MaterialStatusUpdatePostWithHttpInfo(materialStatusUpdateV30Request: MaterialStatusUpdateV30Request): Promise<ApiResponse<MaterialStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<MaterialStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/material/status/update/",
      queryParams: [

      ],
      body: materialStatusUpdateV30Request
    });
  }
}


