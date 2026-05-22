// Generated from oceanengine/ad_open_sdk_go api/api_security_audit_results_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SecurityAuditResultsV30Response } from "../models/index";


export interface SecurityAuditResultsV30ApiOpenApiV30SecurityAuditResultsGetRequest {
  accountId: number | string;
  objectId: number | string;
}

export class SecurityAuditResultsV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityAuditResultsGet(request: SecurityAuditResultsV30ApiOpenApiV30SecurityAuditResultsGetRequest): Promise<SecurityAuditResultsV30Response> {
    const response = await this.openApiV30SecurityAuditResultsGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityAuditResultsGetWithHttpInfo(request: SecurityAuditResultsV30ApiOpenApiV30SecurityAuditResultsGetRequest): Promise<ApiResponse<SecurityAuditResultsV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.objectId == null) {
      throw new ApiException("objectId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<SecurityAuditResultsV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/audit_results/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "object_id", value: request.objectId }
      ]
    });
  }
}


