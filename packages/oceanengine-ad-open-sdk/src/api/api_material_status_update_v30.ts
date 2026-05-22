// Generated from oceanengine/ad_open_sdk_go api/api_material_status_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MaterialStatusUpdateV30Request, MaterialStatusUpdateV30Response } from "../models/index";


export interface MaterialStatusUpdateV30ApiOpenApiV30MaterialStatusUpdatePostRequest {
  materialStatusUpdateV30Request?: MaterialStatusUpdateV30Request;
}

export class MaterialStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30MaterialStatusUpdatePost(request: MaterialStatusUpdateV30ApiOpenApiV30MaterialStatusUpdatePostRequest): Promise<MaterialStatusUpdateV30Response> {
    const response = await this.openApiV30MaterialStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30MaterialStatusUpdatePostWithHttpInfo(request: MaterialStatusUpdateV30ApiOpenApiV30MaterialStatusUpdatePostRequest): Promise<ApiResponse<MaterialStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<MaterialStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/material/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.materialStatusUpdateV30Request
    });
  }
}


