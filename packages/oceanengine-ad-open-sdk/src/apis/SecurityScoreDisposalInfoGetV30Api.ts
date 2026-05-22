// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SecurityScoreDisposalInfoGetV30BusinessLine, SecurityScoreDisposalInfoGetV30Filtering, SecurityScoreDisposalInfoGetV30OrderField, SecurityScoreDisposalInfoGetV30OrderType, SecurityScoreDisposalInfoGetV30Response } from "../models";


export interface OpenApiV30SecurityScoreDisposalInfoGetGetRequest {
  advertiserId: number;
  businessLine: SecurityScoreDisposalInfoGetV30BusinessLine;
  filtering: SecurityScoreDisposalInfoGetV30Filtering;
  page?: number;
  pageSize?: number;
  orderField?: SecurityScoreDisposalInfoGetV30OrderField;
  orderType?: SecurityScoreDisposalInfoGetV30OrderType;
}

export class SecurityScoreDisposalInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityScoreDisposalInfoGetGet(request: OpenApiV30SecurityScoreDisposalInfoGetGetRequest): Promise<SecurityScoreDisposalInfoGetV30Response> {
    const response = await this.openApiV30SecurityScoreDisposalInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityScoreDisposalInfoGetGetWithHttpInfo(request: OpenApiV30SecurityScoreDisposalInfoGetGetRequest): Promise<ApiResponse<SecurityScoreDisposalInfoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityScoreDisposalInfoGetGet");
    }

    if (request.businessLine == null) {
      throw new ApiException("Missing the required parameter 'businessLine' when calling openApiV30SecurityScoreDisposalInfoGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30SecurityScoreDisposalInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityScoreDisposalInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/score_disposal_info/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "business_line", value: request.businessLine },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


