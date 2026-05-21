// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BusinessPlatformCompanyAccountGetV30AccountType, BusinessPlatformCompanyAccountGetV30Response } from "../models";


export class BusinessPlatformCompanyAccountGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BusinessPlatformCompanyAccountGetGet(organizationId: number, companyId: number, accountType: BusinessPlatformCompanyAccountGetV30AccountType[], page: number, pageSize: number): Promise<BusinessPlatformCompanyAccountGetV30Response> {
    const response = await this.openApiV30BusinessPlatformCompanyAccountGetGetWithHttpInfo(organizationId, companyId, accountType, page, pageSize);
    return response.data;
  }

  async openApiV30BusinessPlatformCompanyAccountGetGetWithHttpInfo(organizationId: number, companyId: number, accountType: BusinessPlatformCompanyAccountGetV30AccountType[], page: number, pageSize: number): Promise<ApiResponse<BusinessPlatformCompanyAccountGetV30Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30BusinessPlatformCompanyAccountGetGet");
    }

    if (companyId == null) {
      throw new ApiException("Missing the required parameter 'companyId' when calling openApiV30BusinessPlatformCompanyAccountGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30BusinessPlatformCompanyAccountGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPlatformCompanyAccountGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/business_platform/company_account/get/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "company_id", value: companyId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "account_type", value: accountType, collectionFormat: "csv" }
      ]
    });
  }
}


