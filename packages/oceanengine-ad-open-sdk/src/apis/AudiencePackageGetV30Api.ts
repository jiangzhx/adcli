// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AudiencePackageGetV30Filtering, AudiencePackageGetV30Response } from "../models";


export interface OpenApiV30AudiencePackageGetGetRequest {
  advertiserId: number;
  filtering?: AudiencePackageGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class AudiencePackageGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AudiencePackageGetGet(request: OpenApiV30AudiencePackageGetGetRequest): Promise<AudiencePackageGetV30Response> {
    const response = await this.openApiV30AudiencePackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AudiencePackageGetGetWithHttpInfo(request: OpenApiV30AudiencePackageGetGetRequest): Promise<ApiResponse<AudiencePackageGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AudiencePackageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AudiencePackageGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/audience_package/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


