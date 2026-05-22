// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EbpAdvertiserListV2AccountSource, EbpAdvertiserListV2Filtering, EbpAdvertiserListV2Response } from "../models";


export interface OpenApi2EbpAdvertiserListGetRequest {
  enterpriseOrganizationId: number | string;
  accountSource: EbpAdvertiserListV2AccountSource;
  filtering?: EbpAdvertiserListV2Filtering;
  page?: number;
  pageSize?: number;
}

export class EbpAdvertiserListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpAdvertiserListGet(request: OpenApi2EbpAdvertiserListGetRequest): Promise<EbpAdvertiserListV2Response> {
    const response = await this.openApi2EbpAdvertiserListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EbpAdvertiserListGetWithHttpInfo(request: OpenApi2EbpAdvertiserListGetRequest): Promise<ApiResponse<EbpAdvertiserListV2Response>> {
    if (request.enterpriseOrganizationId == null) {
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApi2EbpAdvertiserListGet");
    }

    if (request.accountSource == null) {
      throw new ApiException("Missing the required parameter 'accountSource' when calling openApi2EbpAdvertiserListGet");
    }
    return this.apiClient.requestWithHttpInfo<EbpAdvertiserListV2Response>({
      method: "GET",
      path: "/open_api/2/ebp/advertiser/list/",
      queryParams: [
        { name: "enterprise_organization_id", value: request.enterpriseOrganizationId },
        { name: "account_source", value: request.accountSource },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


