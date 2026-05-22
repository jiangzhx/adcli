// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OcProjectMaterialCreateV30Request, OcProjectMaterialCreateV30Response } from "../models";


export interface OpenApiV30OcProjectMaterialCreatePostRequest {
  ocProjectMaterialCreateV30Request?: OcProjectMaterialCreateV30Request;
}

export class OcProjectMaterialCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectMaterialCreatePost(request: OpenApiV30OcProjectMaterialCreatePostRequest): Promise<OcProjectMaterialCreateV30Response> {
    const response = await this.openApiV30OcProjectMaterialCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectMaterialCreatePostWithHttpInfo(request: OpenApiV30OcProjectMaterialCreatePostRequest): Promise<ApiResponse<OcProjectMaterialCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectMaterialCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/material/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectMaterialCreateV30Request
    });
  }
}


