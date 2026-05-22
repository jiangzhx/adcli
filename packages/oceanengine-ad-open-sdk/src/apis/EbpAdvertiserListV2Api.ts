// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EbpAdvertiserListV2AccountSource, EbpAdvertiserListV2Filtering, EbpAdvertiserListV2Response } from "../models";


export class EbpAdvertiserListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpAdvertiserListGet(enterpriseOrganizationId: number, accountSource: EbpAdvertiserListV2AccountSource, filtering: EbpAdvertiserListV2Filtering, page: number, pageSize: number): Promise<EbpAdvertiserListV2Response> {
    const response = await this.openApi2EbpAdvertiserListGetWithHttpInfo(enterpriseOrganizationId, accountSource, filtering, page, pageSize);
    return response.data;
  }

  async openApi2EbpAdvertiserListGetWithHttpInfo(enterpriseOrganizationId: number, accountSource: EbpAdvertiserListV2AccountSource, filtering: EbpAdvertiserListV2Filtering, page: number, pageSize: number): Promise<ApiResponse<EbpAdvertiserListV2Response>> {
    if (enterpriseOrganizationId == null) {
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApi2EbpAdvertiserListGet");
    }

    if (accountSource == null) {
      throw new ApiException("Missing the required parameter 'accountSource' when calling openApi2EbpAdvertiserListGet");
    }
    return this.apiClient.requestWithHttpInfo<EbpAdvertiserListV2Response>({
      method: "GET",
      path: "/open_api/2/ebp/advertiser/list/",
      queryParams: [
        { name: "enterprise_organization_id", value: enterpriseOrganizationId },
        { name: "account_source", value: accountSource },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


