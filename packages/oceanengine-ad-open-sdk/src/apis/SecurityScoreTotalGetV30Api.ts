// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SecurityScoreTotalGetV30BusinessLine, SecurityScoreTotalGetV30Filtering, SecurityScoreTotalGetV30Response } from "../models";


export class SecurityScoreTotalGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityScoreTotalGetGet(advertiserId: number, businessLine: SecurityScoreTotalGetV30BusinessLine, page: number, pageSize: number, filtering: SecurityScoreTotalGetV30Filtering): Promise<SecurityScoreTotalGetV30Response> {
    const response = await this.openApiV30SecurityScoreTotalGetGetWithHttpInfo(advertiserId, businessLine, page, pageSize, filtering);
    return response.data;
  }

  async openApiV30SecurityScoreTotalGetGetWithHttpInfo(advertiserId: number, businessLine: SecurityScoreTotalGetV30BusinessLine, page: number, pageSize: number, filtering: SecurityScoreTotalGetV30Filtering): Promise<ApiResponse<SecurityScoreTotalGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityScoreTotalGetGet");
    }

    if (businessLine == null) {
      throw new ApiException("Missing the required parameter 'businessLine' when calling openApiV30SecurityScoreTotalGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityScoreTotalGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/score_total/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "business_line", value: businessLine },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


