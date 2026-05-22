// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessPlatformCompanyInfoGetV30Response } from "../models";


export interface OpenApiV30BusinessPlatformCompanyInfoGetGetRequest {
  organizationId: number;
  page?: number;
  pageSize?: number;
}

export class BusinessPlatformCompanyInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BusinessPlatformCompanyInfoGetGet(request: OpenApiV30BusinessPlatformCompanyInfoGetGetRequest): Promise<BusinessPlatformCompanyInfoGetV30Response> {
    const response = await this.openApiV30BusinessPlatformCompanyInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BusinessPlatformCompanyInfoGetGetWithHttpInfo(request: OpenApiV30BusinessPlatformCompanyInfoGetGetRequest): Promise<ApiResponse<BusinessPlatformCompanyInfoGetV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30BusinessPlatformCompanyInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPlatformCompanyInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/business_platform/company_info/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


