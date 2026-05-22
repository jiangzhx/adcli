// Generated from oceanengine/ad_open_sdk_go api/api_security_create_appeal_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SecurityCreateAppealV30Request, SecurityCreateAppealV30Response } from "../models/index";


export interface SecurityCreateAppealV30ApiOpenApiV30SecurityCreateAppealPostRequest {
  securityCreateAppealV30Request?: SecurityCreateAppealV30Request;
}

export class SecurityCreateAppealV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityCreateAppealPost(request: SecurityCreateAppealV30ApiOpenApiV30SecurityCreateAppealPostRequest): Promise<SecurityCreateAppealV30Response> {
    const response = await this.openApiV30SecurityCreateAppealPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityCreateAppealPostWithHttpInfo(request: SecurityCreateAppealV30ApiOpenApiV30SecurityCreateAppealPostRequest): Promise<ApiResponse<SecurityCreateAppealV30Response>> {

    return this.apiClient.requestWithHttpInfo<SecurityCreateAppealV30Response>({
      method: "POST",
      path: "/open_api/v3.0/security/create_appeal/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.securityCreateAppealV30Request
    });
  }
}


