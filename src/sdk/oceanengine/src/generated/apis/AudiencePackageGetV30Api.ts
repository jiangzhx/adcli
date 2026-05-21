// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AudiencePackageGetV30Filtering, AudiencePackageGetV30Response } from "../models";


export class AudiencePackageGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AudiencePackageGetGet(advertiserId: number, filtering: AudiencePackageGetV30Filtering, page: number, pageSize: number): Promise<AudiencePackageGetV30Response> {
    const response = await this.openApiV30AudiencePackageGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30AudiencePackageGetGetWithHttpInfo(advertiserId: number, filtering: AudiencePackageGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<AudiencePackageGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AudiencePackageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AudiencePackageGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/audience_package/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


