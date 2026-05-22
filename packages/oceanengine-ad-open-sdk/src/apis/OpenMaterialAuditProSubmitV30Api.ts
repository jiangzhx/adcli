// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OpenMaterialAuditProSubmitV30Request, OpenMaterialAuditProSubmitV30Response } from "../models";


export interface OpenApiV30OpenMaterialAuditProSubmitPostRequest {
  openMaterialAuditProSubmitV30Request?: OpenMaterialAuditProSubmitV30Request;
}

export class OpenMaterialAuditProSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OpenMaterialAuditProSubmitPost(request: OpenApiV30OpenMaterialAuditProSubmitPostRequest): Promise<OpenMaterialAuditProSubmitV30Response> {
    const response = await this.openApiV30OpenMaterialAuditProSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OpenMaterialAuditProSubmitPostWithHttpInfo(request: OpenApiV30OpenMaterialAuditProSubmitPostRequest): Promise<ApiResponse<OpenMaterialAuditProSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<OpenMaterialAuditProSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/open_material_audit/pro/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.openMaterialAuditProSubmitV30Request
    });
  }
}


