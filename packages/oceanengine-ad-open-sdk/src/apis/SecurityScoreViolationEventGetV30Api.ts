// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SecurityScoreViolationEventGetV30BusinessLine, SecurityScoreViolationEventGetV30Filtering, SecurityScoreViolationEventGetV30Response } from "../models";


export class SecurityScoreViolationEventGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityScoreViolationEventGetGet(advertiserId: number, businessLine: SecurityScoreViolationEventGetV30BusinessLine, filtering: SecurityScoreViolationEventGetV30Filtering, page: number, pageSize: number): Promise<SecurityScoreViolationEventGetV30Response> {
    const response = await this.openApiV30SecurityScoreViolationEventGetGetWithHttpInfo(advertiserId, businessLine, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30SecurityScoreViolationEventGetGetWithHttpInfo(advertiserId: number, businessLine: SecurityScoreViolationEventGetV30BusinessLine, filtering: SecurityScoreViolationEventGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<SecurityScoreViolationEventGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityScoreViolationEventGetGet");
    }

    if (businessLine == null) {
      throw new ApiException("Missing the required parameter 'businessLine' when calling openApiV30SecurityScoreViolationEventGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityScoreViolationEventGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/score_violation_event/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "business_line", value: businessLine },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


