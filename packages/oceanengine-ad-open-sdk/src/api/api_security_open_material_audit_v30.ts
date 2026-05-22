// Generated from oceanengine/ad_open_sdk_go api/api_security_open_material_audit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SecurityOpenMaterialAuditV30Request, SecurityOpenMaterialAuditV30Response } from "../models/index";


export interface SecurityOpenMaterialAuditV30ApiOpenApiV30SecurityOpenMaterialAuditPostRequest {
  securityOpenMaterialAuditV30Request?: SecurityOpenMaterialAuditV30Request;
}

export class SecurityOpenMaterialAuditV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityOpenMaterialAuditPost(request: SecurityOpenMaterialAuditV30ApiOpenApiV30SecurityOpenMaterialAuditPostRequest): Promise<SecurityOpenMaterialAuditV30Response> {
    const response = await this.openApiV30SecurityOpenMaterialAuditPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityOpenMaterialAuditPostWithHttpInfo(request: SecurityOpenMaterialAuditV30ApiOpenApiV30SecurityOpenMaterialAuditPostRequest): Promise<ApiResponse<SecurityOpenMaterialAuditV30Response>> {

    return this.apiClient.requestWithHttpInfo<SecurityOpenMaterialAuditV30Response>({
      method: "POST",
      path: "/open_api/v3.0/security/open_material_audit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.securityOpenMaterialAuditV30Request
    });
  }
}


