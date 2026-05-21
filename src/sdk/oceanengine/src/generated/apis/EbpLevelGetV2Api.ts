// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { EbpLevelGetV2Response } from "../models";


export class EbpLevelGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpLevelGetGet(enterpriseOrganizationId: number): Promise<EbpLevelGetV2Response> {
    const response = await this.openApi2EbpLevelGetGetWithHttpInfo(enterpriseOrganizationId);
    return response.data;
  }

  async openApi2EbpLevelGetGetWithHttpInfo(enterpriseOrganizationId: number): Promise<ApiResponse<EbpLevelGetV2Response>> {
    if (enterpriseOrganizationId == null) {
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApi2EbpLevelGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EbpLevelGetV2Response>({
      method: "GET",
      path: "/open_api/2/ebp/level/get/",
      queryParams: [
        { name: "enterprise_organization_id", value: enterpriseOrganizationId }
      ]
    });
  }
}


