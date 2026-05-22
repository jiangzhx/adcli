// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OpenMaterialAuditProSubmitV30Request, OpenMaterialAuditProSubmitV30Response } from "../models";


export class OpenMaterialAuditProSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OpenMaterialAuditProSubmitPost(openMaterialAuditProSubmitV30Request: OpenMaterialAuditProSubmitV30Request): Promise<OpenMaterialAuditProSubmitV30Response> {
    const response = await this.openApiV30OpenMaterialAuditProSubmitPostWithHttpInfo(openMaterialAuditProSubmitV30Request);
    return response.data;
  }

  async openApiV30OpenMaterialAuditProSubmitPostWithHttpInfo(openMaterialAuditProSubmitV30Request: OpenMaterialAuditProSubmitV30Request): Promise<ApiResponse<OpenMaterialAuditProSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<OpenMaterialAuditProSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/open_material_audit/pro/submit/",
      queryParams: [

      ],
      body: openMaterialAuditProSubmitV30Request
    });
  }
}


