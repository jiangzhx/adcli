// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessPlatformPartnerOrganizationListV2Filtering, BusinessPlatformPartnerOrganizationListV2Response } from "../models";


export interface OpenApi2BusinessPlatformPartnerOrganizationListGetRequest {
  organizationId: number;
  page?: number;
  pageSize?: number;
  filtering?: BusinessPlatformPartnerOrganizationListV2Filtering;
}

export class BusinessPlatformPartnerOrganizationListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2BusinessPlatformPartnerOrganizationListGet(request: OpenApi2BusinessPlatformPartnerOrganizationListGetRequest): Promise<BusinessPlatformPartnerOrganizationListV2Response> {
    const response = await this.openApi2BusinessPlatformPartnerOrganizationListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2BusinessPlatformPartnerOrganizationListGetWithHttpInfo(request: OpenApi2BusinessPlatformPartnerOrganizationListGetRequest): Promise<ApiResponse<BusinessPlatformPartnerOrganizationListV2Response>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApi2BusinessPlatformPartnerOrganizationListGet");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPlatformPartnerOrganizationListV2Response>({
      method: "GET",
      path: "/open_api/2/business_platform/partner_organization/list/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


