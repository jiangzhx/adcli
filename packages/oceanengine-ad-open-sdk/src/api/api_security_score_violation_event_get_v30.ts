// Generated from oceanengine/ad_open_sdk_go api/api_security_score_violation_event_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SecurityScoreViolationEventGetV30BusinessLine, SecurityScoreViolationEventGetV30Filtering, SecurityScoreViolationEventGetV30Response } from "../models/index";


export interface SecurityScoreViolationEventGetV30ApiOpenApiV30SecurityScoreViolationEventGetGetRequest {
  advertiserId: number | string;
  businessLine: SecurityScoreViolationEventGetV30BusinessLine;
  filtering?: SecurityScoreViolationEventGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class SecurityScoreViolationEventGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityScoreViolationEventGetGet(request: SecurityScoreViolationEventGetV30ApiOpenApiV30SecurityScoreViolationEventGetGetRequest): Promise<SecurityScoreViolationEventGetV30Response> {
    const response = await this.openApiV30SecurityScoreViolationEventGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityScoreViolationEventGetGetWithHttpInfo(request: SecurityScoreViolationEventGetV30ApiOpenApiV30SecurityScoreViolationEventGetGetRequest): Promise<ApiResponse<SecurityScoreViolationEventGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.businessLine == null) {
      throw new ApiException("businessLine is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<SecurityScoreViolationEventGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/score_violation_event/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "business_line", value: request.businessLine },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


