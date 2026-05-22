// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SecurityScoreViolationEventGetV30BusinessLine, SecurityScoreViolationEventGetV30Filtering, SecurityScoreViolationEventGetV30Response } from "../models";


export interface OpenApiV30SecurityScoreViolationEventGetGetRequest {
  advertiserId: number;
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

  async openApiV30SecurityScoreViolationEventGetGet(request: OpenApiV30SecurityScoreViolationEventGetGetRequest): Promise<SecurityScoreViolationEventGetV30Response> {
    const response = await this.openApiV30SecurityScoreViolationEventGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityScoreViolationEventGetGetWithHttpInfo(request: OpenApiV30SecurityScoreViolationEventGetGetRequest): Promise<ApiResponse<SecurityScoreViolationEventGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityScoreViolationEventGetGet");
    }

    if (request.businessLine == null) {
      throw new ApiException("Missing the required parameter 'businessLine' when calling openApiV30SecurityScoreViolationEventGetGet");
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


