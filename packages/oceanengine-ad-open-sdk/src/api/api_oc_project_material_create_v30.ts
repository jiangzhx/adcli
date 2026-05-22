// Generated from oceanengine/ad_open_sdk_go api/api_oc_project_material_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectMaterialCreateV30Request, OcProjectMaterialCreateV30Response } from "../models/index";


export interface OcProjectMaterialCreateV30ApiOpenApiV30OcProjectMaterialCreatePostRequest {
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

  async openApiV30OcProjectMaterialCreatePost(request: OcProjectMaterialCreateV30ApiOpenApiV30OcProjectMaterialCreatePostRequest): Promise<OcProjectMaterialCreateV30Response> {
    const response = await this.openApiV30OcProjectMaterialCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectMaterialCreatePostWithHttpInfo(request: OcProjectMaterialCreateV30ApiOpenApiV30OcProjectMaterialCreatePostRequest): Promise<ApiResponse<OcProjectMaterialCreateV30Response>> {

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


