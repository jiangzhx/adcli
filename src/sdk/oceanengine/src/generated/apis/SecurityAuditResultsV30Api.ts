// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SecurityAuditResultsV30Response } from "../models";


export class SecurityAuditResultsV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityAuditResultsGet(accountId: number, objectId: number): Promise<SecurityAuditResultsV30Response> {
    const response = await this.openApiV30SecurityAuditResultsGetWithHttpInfo(accountId, objectId);
    return response.data;
  }

  async openApiV30SecurityAuditResultsGetWithHttpInfo(accountId: number, objectId: number): Promise<ApiResponse<SecurityAuditResultsV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SecurityAuditResultsGet");
    }

    if (objectId == null) {
      throw new ApiException("Missing the required parameter 'objectId' when calling openApiV30SecurityAuditResultsGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityAuditResultsV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/audit_results/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "object_id", value: objectId }
      ]
    });
  }
}


