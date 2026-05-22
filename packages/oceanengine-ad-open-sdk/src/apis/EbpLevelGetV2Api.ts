// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EbpLevelGetV2Response } from "../models";


export interface OpenApi2EbpLevelGetGetRequest {
  enterpriseOrganizationId: number;
}

export class EbpLevelGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpLevelGetGet(request: OpenApi2EbpLevelGetGetRequest): Promise<EbpLevelGetV2Response> {
    const response = await this.openApi2EbpLevelGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EbpLevelGetGetWithHttpInfo(request: OpenApi2EbpLevelGetGetRequest): Promise<ApiResponse<EbpLevelGetV2Response>> {
    if (request.enterpriseOrganizationId == null) {
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApi2EbpLevelGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EbpLevelGetV2Response>({
      method: "GET",
      path: "/open_api/2/ebp/level/get/",
      queryParams: [
        { name: "enterprise_organization_id", value: request.enterpriseOrganizationId }
      ]
    });
  }
}


