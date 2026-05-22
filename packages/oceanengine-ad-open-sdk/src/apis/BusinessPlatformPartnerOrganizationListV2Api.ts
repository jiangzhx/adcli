// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessPlatformPartnerOrganizationListV2Filtering, BusinessPlatformPartnerOrganizationListV2Response } from "../models";


export class BusinessPlatformPartnerOrganizationListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2BusinessPlatformPartnerOrganizationListGet(organizationId: number, page: number, pageSize: number, filtering: BusinessPlatformPartnerOrganizationListV2Filtering): Promise<BusinessPlatformPartnerOrganizationListV2Response> {
    const response = await this.openApi2BusinessPlatformPartnerOrganizationListGetWithHttpInfo(organizationId, page, pageSize, filtering);
    return response.data;
  }

  async openApi2BusinessPlatformPartnerOrganizationListGetWithHttpInfo(organizationId: number, page: number, pageSize: number, filtering: BusinessPlatformPartnerOrganizationListV2Filtering): Promise<ApiResponse<BusinessPlatformPartnerOrganizationListV2Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApi2BusinessPlatformPartnerOrganizationListGet");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPlatformPartnerOrganizationListV2Response>({
      method: "GET",
      path: "/open_api/2/business_platform/partner_organization/list/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


