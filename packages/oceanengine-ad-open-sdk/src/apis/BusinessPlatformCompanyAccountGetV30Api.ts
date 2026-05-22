// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessPlatformCompanyAccountGetV30AccountType, BusinessPlatformCompanyAccountGetV30Response } from "../models";


export interface OpenApiV30BusinessPlatformCompanyAccountGetGetRequest {
  organizationId: number;
  companyId: number;
  accountType: BusinessPlatformCompanyAccountGetV30AccountType[];
  page?: number;
  pageSize?: number;
}

export class BusinessPlatformCompanyAccountGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BusinessPlatformCompanyAccountGetGet(request: OpenApiV30BusinessPlatformCompanyAccountGetGetRequest): Promise<BusinessPlatformCompanyAccountGetV30Response> {
    const response = await this.openApiV30BusinessPlatformCompanyAccountGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BusinessPlatformCompanyAccountGetGetWithHttpInfo(request: OpenApiV30BusinessPlatformCompanyAccountGetGetRequest): Promise<ApiResponse<BusinessPlatformCompanyAccountGetV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30BusinessPlatformCompanyAccountGetGet");
    }

    if (request.companyId == null) {
      throw new ApiException("Missing the required parameter 'companyId' when calling openApiV30BusinessPlatformCompanyAccountGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30BusinessPlatformCompanyAccountGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPlatformCompanyAccountGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/business_platform/company_account/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "company_id", value: request.companyId },
        { name: "account_type", value: request.accountType, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


