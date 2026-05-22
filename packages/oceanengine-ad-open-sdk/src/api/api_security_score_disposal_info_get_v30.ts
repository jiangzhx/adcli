// Generated from oceanengine/ad_open_sdk_go api/api_security_score_disposal_info_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SecurityScoreDisposalInfoGetV30BusinessLine, SecurityScoreDisposalInfoGetV30Filtering, SecurityScoreDisposalInfoGetV30OrderField, SecurityScoreDisposalInfoGetV30OrderType, SecurityScoreDisposalInfoGetV30Response } from "../models/index";


export interface SecurityScoreDisposalInfoGetV30ApiOpenApiV30SecurityScoreDisposalInfoGetGetRequest {
  advertiserId: number | string;
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

  async openApiV30SecurityScoreDisposalInfoGetGet(request: SecurityScoreDisposalInfoGetV30ApiOpenApiV30SecurityScoreDisposalInfoGetGetRequest): Promise<SecurityScoreDisposalInfoGetV30Response> {
    const response = await this.openApiV30SecurityScoreDisposalInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityScoreDisposalInfoGetGetWithHttpInfo(request: SecurityScoreDisposalInfoGetV30ApiOpenApiV30SecurityScoreDisposalInfoGetGetRequest): Promise<ApiResponse<SecurityScoreDisposalInfoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.businessLine == null) {
      throw new ApiException("businessLine is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
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


