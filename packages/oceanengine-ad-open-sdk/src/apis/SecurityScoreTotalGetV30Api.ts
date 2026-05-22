// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SecurityScoreTotalGetV30BusinessLine, SecurityScoreTotalGetV30Filtering, SecurityScoreTotalGetV30Response } from "../models";


export interface OpenApiV30SecurityScoreTotalGetGetRequest {
  advertiserId: number | string;
  businessLine: SecurityScoreTotalGetV30BusinessLine;
  page?: number;
  pageSize?: number;
  filtering?: SecurityScoreTotalGetV30Filtering;
}

export class SecurityScoreTotalGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityScoreTotalGetGet(request: OpenApiV30SecurityScoreTotalGetGetRequest): Promise<SecurityScoreTotalGetV30Response> {
    const response = await this.openApiV30SecurityScoreTotalGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityScoreTotalGetGetWithHttpInfo(request: OpenApiV30SecurityScoreTotalGetGetRequest): Promise<ApiResponse<SecurityScoreTotalGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityScoreTotalGetGet");
    }

    if (request.businessLine == null) {
      throw new ApiException("Missing the required parameter 'businessLine' when calling openApiV30SecurityScoreTotalGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityScoreTotalGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/score_total/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "business_line", value: request.businessLine },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


