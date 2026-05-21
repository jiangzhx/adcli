// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { OcProjectMaterialStatusUpdateV30Request, OcProjectMaterialStatusUpdateV30Response } from "../models";


export class OcProjectMaterialStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectMaterialStatusUpdatePost(ocProjectMaterialStatusUpdateV30Request: OcProjectMaterialStatusUpdateV30Request): Promise<OcProjectMaterialStatusUpdateV30Response> {
    const response = await this.openApiV30OcProjectMaterialStatusUpdatePostWithHttpInfo(ocProjectMaterialStatusUpdateV30Request);
    return response.data;
  }

  async openApiV30OcProjectMaterialStatusUpdatePostWithHttpInfo(ocProjectMaterialStatusUpdateV30Request: OcProjectMaterialStatusUpdateV30Request): Promise<ApiResponse<OcProjectMaterialStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectMaterialStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/material/status/update/",
      queryParams: [

      ],
      body: ocProjectMaterialStatusUpdateV30Request
    });
  }
}


