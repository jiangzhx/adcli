// Generated from oceanengine/ad_open_sdk_go api/api_security_score_total_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SecurityScoreTotalGetV30BusinessLine, SecurityScoreTotalGetV30Filtering, SecurityScoreTotalGetV30Response } from "../models/index";


export interface SecurityScoreTotalGetV30ApiOpenApiV30SecurityScoreTotalGetGetRequest {
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

  async openApiV30SecurityScoreTotalGetGet(request: SecurityScoreTotalGetV30ApiOpenApiV30SecurityScoreTotalGetGetRequest): Promise<SecurityScoreTotalGetV30Response> {
    const response = await this.openApiV30SecurityScoreTotalGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityScoreTotalGetGetWithHttpInfo(request: SecurityScoreTotalGetV30ApiOpenApiV30SecurityScoreTotalGetGetRequest): Promise<ApiResponse<SecurityScoreTotalGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.businessLine == null) {
      throw new ApiException("businessLine is required and must be specified");
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


