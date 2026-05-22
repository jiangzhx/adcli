// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OpenMaterialAuditProGetV30Response } from "../models";


export class OpenMaterialAuditProGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OpenMaterialAuditProGetGet(advertiserId: number, runId: string): Promise<OpenMaterialAuditProGetV30Response> {
    const response = await this.openApiV30OpenMaterialAuditProGetGetWithHttpInfo(advertiserId, runId);
    return response.data;
  }

  async openApiV30OpenMaterialAuditProGetGetWithHttpInfo(advertiserId: number, runId: string): Promise<ApiResponse<OpenMaterialAuditProGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30OpenMaterialAuditProGetGet");
    }

    if (runId == null) {
      throw new ApiException("Missing the required parameter 'runId' when calling openApiV30OpenMaterialAuditProGetGet");
    }
    return this.apiClient.requestWithHttpInfo<OpenMaterialAuditProGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/open_material_audit/pro/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "run_id", value: runId }
      ]
    });
  }
}


