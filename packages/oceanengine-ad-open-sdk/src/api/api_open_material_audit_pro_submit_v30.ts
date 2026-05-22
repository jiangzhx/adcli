// Generated from oceanengine/ad_open_sdk_go api/api_open_material_audit_pro_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OpenMaterialAuditProSubmitV30Request, OpenMaterialAuditProSubmitV30Response } from "../models/index";


export interface OpenMaterialAuditProSubmitV30ApiOpenApiV30OpenMaterialAuditProSubmitPostRequest {
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

  async openApiV30OpenMaterialAuditProSubmitPost(request: OpenMaterialAuditProSubmitV30ApiOpenApiV30OpenMaterialAuditProSubmitPostRequest): Promise<OpenMaterialAuditProSubmitV30Response> {
    const response = await this.openApiV30OpenMaterialAuditProSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OpenMaterialAuditProSubmitPostWithHttpInfo(request: OpenMaterialAuditProSubmitV30ApiOpenApiV30OpenMaterialAuditProSubmitPostRequest): Promise<ApiResponse<OpenMaterialAuditProSubmitV30Response>> {

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


