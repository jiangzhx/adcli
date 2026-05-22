// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OcProjectMaterialDeleteV30Request, OcProjectMaterialDeleteV30Response } from "../models";


export class OcProjectMaterialDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectMaterialDeletePost(ocProjectMaterialDeleteV30Request: OcProjectMaterialDeleteV30Request): Promise<OcProjectMaterialDeleteV30Response> {
    const response = await this.openApiV30OcProjectMaterialDeletePostWithHttpInfo(ocProjectMaterialDeleteV30Request);
    return response.data;
  }

  async openApiV30OcProjectMaterialDeletePostWithHttpInfo(ocProjectMaterialDeleteV30Request: OcProjectMaterialDeleteV30Request): Promise<ApiResponse<OcProjectMaterialDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectMaterialDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/material/delete/",
      queryParams: [

      ],
      body: ocProjectMaterialDeleteV30Request
    });
  }
}


