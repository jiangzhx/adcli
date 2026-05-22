// Generated from oceanengine/ad_open_sdk_go api/api_oc_project_material_status_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectMaterialStatusUpdateV30Request, OcProjectMaterialStatusUpdateV30Response } from "../models/index";


export interface OcProjectMaterialStatusUpdateV30ApiOpenApiV30OcProjectMaterialStatusUpdatePostRequest {
  ocProjectMaterialStatusUpdateV30Request?: OcProjectMaterialStatusUpdateV30Request;
}

export class OcProjectMaterialStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectMaterialStatusUpdatePost(request: OcProjectMaterialStatusUpdateV30ApiOpenApiV30OcProjectMaterialStatusUpdatePostRequest): Promise<OcProjectMaterialStatusUpdateV30Response> {
    const response = await this.openApiV30OcProjectMaterialStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectMaterialStatusUpdatePostWithHttpInfo(request: OcProjectMaterialStatusUpdateV30ApiOpenApiV30OcProjectMaterialStatusUpdatePostRequest): Promise<ApiResponse<OcProjectMaterialStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectMaterialStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/material/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectMaterialStatusUpdateV30Request
    });
  }
}


