// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BusinessPlatformCompanyInfoGetV30Response } from "../models";


export class BusinessPlatformCompanyInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BusinessPlatformCompanyInfoGetGet(organizationId: number, page: number, pageSize: number): Promise<BusinessPlatformCompanyInfoGetV30Response> {
    const response = await this.openApiV30BusinessPlatformCompanyInfoGetGetWithHttpInfo(organizationId, page, pageSize);
    return response.data;
  }

  async openApiV30BusinessPlatformCompanyInfoGetGetWithHttpInfo(organizationId: number, page: number, pageSize: number): Promise<ApiResponse<BusinessPlatformCompanyInfoGetV30Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30BusinessPlatformCompanyInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPlatformCompanyInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/business_platform/company_info/get/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


