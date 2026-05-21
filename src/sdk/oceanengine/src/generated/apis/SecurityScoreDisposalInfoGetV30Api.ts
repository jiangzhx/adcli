// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SecurityScoreDisposalInfoGetV30BusinessLine, SecurityScoreDisposalInfoGetV30Filtering, SecurityScoreDisposalInfoGetV30OrderField, SecurityScoreDisposalInfoGetV30OrderType, SecurityScoreDisposalInfoGetV30Response } from "../models";


export class SecurityScoreDisposalInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityScoreDisposalInfoGetGet(advertiserId: number, businessLine: SecurityScoreDisposalInfoGetV30BusinessLine, filtering: SecurityScoreDisposalInfoGetV30Filtering, page: number, pageSize: number, orderField: SecurityScoreDisposalInfoGetV30OrderField, orderType: SecurityScoreDisposalInfoGetV30OrderType): Promise<SecurityScoreDisposalInfoGetV30Response> {
    const response = await this.openApiV30SecurityScoreDisposalInfoGetGetWithHttpInfo(advertiserId, businessLine, filtering, page, pageSize, orderField, orderType);
    return response.data;
  }

  async openApiV30SecurityScoreDisposalInfoGetGetWithHttpInfo(advertiserId: number, businessLine: SecurityScoreDisposalInfoGetV30BusinessLine, filtering: SecurityScoreDisposalInfoGetV30Filtering, page: number, pageSize: number, orderField: SecurityScoreDisposalInfoGetV30OrderField, orderType: SecurityScoreDisposalInfoGetV30OrderType): Promise<ApiResponse<SecurityScoreDisposalInfoGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityScoreDisposalInfoGetGet");
    }

    if (businessLine == null) {
      throw new ApiException("Missing the required parameter 'businessLine' when calling openApiV30SecurityScoreDisposalInfoGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30SecurityScoreDisposalInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityScoreDisposalInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/score_disposal_info/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "business_line", value: businessLine },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


