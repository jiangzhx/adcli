// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SecurityOpenMaterialAuditV30Request, SecurityOpenMaterialAuditV30Response } from "../models";


export class SecurityOpenMaterialAuditV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityOpenMaterialAuditPost(request: SecurityOpenMaterialAuditV30Request): Promise<SecurityOpenMaterialAuditV30Response> {
    const response = await this.openApiV30SecurityOpenMaterialAuditPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityOpenMaterialAuditPostWithHttpInfo(request: SecurityOpenMaterialAuditV30Request): Promise<ApiResponse<SecurityOpenMaterialAuditV30Response>> {
    return this.apiClient.requestWithHttpInfo<SecurityOpenMaterialAuditV30Response>({
      method: "POST",
      path: "/open_api/v3.0/security/open_material_audit/",
      queryParams: [

      ],
      body: request
    });
  }
}


