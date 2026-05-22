// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SecurityCreateAppealV30Request, SecurityCreateAppealV30Response } from "../models";


export class SecurityCreateAppealV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityCreateAppealPost(request: SecurityCreateAppealV30Request): Promise<SecurityCreateAppealV30Response> {
    const response = await this.openApiV30SecurityCreateAppealPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityCreateAppealPostWithHttpInfo(request: SecurityCreateAppealV30Request): Promise<ApiResponse<SecurityCreateAppealV30Response>> {
    return this.apiClient.requestWithHttpInfo<SecurityCreateAppealV30Response>({
      method: "POST",
      path: "/open_api/v3.0/security/create_appeal/",
      queryParams: [

      ],
      body: request
    });
  }
}


