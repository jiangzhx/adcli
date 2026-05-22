// Generated from oceanengine/ad_open_sdk_go api/api_business_platform_company_info_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BusinessPlatformCompanyInfoGetV30Response } from "../models/index";


export interface BusinessPlatformCompanyInfoGetV30ApiOpenApiV30BusinessPlatformCompanyInfoGetGetRequest {
  organizationId: number | string;
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

  async openApiV30BusinessPlatformCompanyInfoGetGet(request: BusinessPlatformCompanyInfoGetV30ApiOpenApiV30BusinessPlatformCompanyInfoGetGetRequest): Promise<BusinessPlatformCompanyInfoGetV30Response> {
    const response = await this.openApiV30BusinessPlatformCompanyInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BusinessPlatformCompanyInfoGetGetWithHttpInfo(request: BusinessPlatformCompanyInfoGetV30ApiOpenApiV30BusinessPlatformCompanyInfoGetGetRequest): Promise<ApiResponse<BusinessPlatformCompanyInfoGetV30Response>> {
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


