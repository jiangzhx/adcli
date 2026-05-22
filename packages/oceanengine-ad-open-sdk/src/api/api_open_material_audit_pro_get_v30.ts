// Generated from oceanengine/ad_open_sdk_go api/api_open_material_audit_pro_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OpenMaterialAuditProGetV30Response } from "../models/index";


export interface OpenMaterialAuditProGetV30ApiOpenApiV30OpenMaterialAuditProGetGetRequest {
  advertiserId: number | string;
  runId: string;
}

export class OpenMaterialAuditProGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OpenMaterialAuditProGetGet(request: OpenMaterialAuditProGetV30ApiOpenApiV30OpenMaterialAuditProGetGetRequest): Promise<OpenMaterialAuditProGetV30Response> {
    const response = await this.openApiV30OpenMaterialAuditProGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OpenMaterialAuditProGetGetWithHttpInfo(request: OpenMaterialAuditProGetV30ApiOpenApiV30OpenMaterialAuditProGetGetRequest): Promise<ApiResponse<OpenMaterialAuditProGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30OpenMaterialAuditProGetGet");
    }

    if (request.runId == null) {
      throw new ApiException("Missing the required parameter 'runId' when calling openApiV30OpenMaterialAuditProGetGet");
    }
    return this.apiClient.requestWithHttpInfo<OpenMaterialAuditProGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/open_material_audit/pro/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "run_id", value: request.runId }
      ]
    });
  }
}


