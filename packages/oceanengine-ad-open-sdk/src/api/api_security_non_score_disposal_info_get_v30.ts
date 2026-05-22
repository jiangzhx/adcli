// Generated from oceanengine/ad_open_sdk_go api/api_security_non_score_disposal_info_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SecurityNonScoreDisposalInfoGetV30BusinessLine, SecurityNonScoreDisposalInfoGetV30Response, SecurityNonScoreDisposalInfoGetV30TimeRange } from "../models/index";


export interface SecurityNonScoreDisposalInfoGetV30ApiOpenApiV30SecurityNonScoreDisposalInfoGetGetRequest {
  advertiserId: number | string;
  businessLine: SecurityNonScoreDisposalInfoGetV30BusinessLine;
  timeRange?: SecurityNonScoreDisposalInfoGetV30TimeRange;
  page?: number;
  pageSize?: number;
}

export class SecurityNonScoreDisposalInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityNonScoreDisposalInfoGetGet(request: SecurityNonScoreDisposalInfoGetV30ApiOpenApiV30SecurityNonScoreDisposalInfoGetGetRequest): Promise<SecurityNonScoreDisposalInfoGetV30Response> {
    const response = await this.openApiV30SecurityNonScoreDisposalInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityNonScoreDisposalInfoGetGetWithHttpInfo(request: SecurityNonScoreDisposalInfoGetV30ApiOpenApiV30SecurityNonScoreDisposalInfoGetGetRequest): Promise<ApiResponse<SecurityNonScoreDisposalInfoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityNonScoreDisposalInfoGetGet");
    }

    if (request.businessLine == null) {
      throw new ApiException("Missing the required parameter 'businessLine' when calling openApiV30SecurityNonScoreDisposalInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityNonScoreDisposalInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/non_score_disposal_info/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "business_line", value: request.businessLine },
        { name: "time_range", value: request.timeRange },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


