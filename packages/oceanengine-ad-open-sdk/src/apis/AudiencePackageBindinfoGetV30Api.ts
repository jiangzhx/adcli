// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AudiencePackageBindinfoGetV30Response } from "../models";


export class AudiencePackageBindinfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AudiencePackageBindinfoGetGet(advertiserId: number, audiencePackageId: number, page: number, pageSize: number): Promise<AudiencePackageBindinfoGetV30Response> {
    const response = await this.openApiV30AudiencePackageBindinfoGetGetWithHttpInfo(advertiserId, audiencePackageId, page, pageSize);
    return response.data;
  }

  async openApiV30AudiencePackageBindinfoGetGetWithHttpInfo(advertiserId: number, audiencePackageId: number, page: number, pageSize: number): Promise<ApiResponse<AudiencePackageBindinfoGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AudiencePackageBindinfoGetGet");
    }

    if (audiencePackageId == null) {
      throw new ApiException("Missing the required parameter 'audiencePackageId' when calling openApiV30AudiencePackageBindinfoGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30AudiencePackageBindinfoGetGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30AudiencePackageBindinfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AudiencePackageBindinfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/audience_package_bindinfo/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "audience_package_id", value: audiencePackageId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


