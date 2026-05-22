// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AudiencePackageBindinfoGetV30Response } from "../models";


export interface OpenApiV30AudiencePackageBindinfoGetGetRequest {
  advertiserId: number;
  audiencePackageId: number;
  page: number;
  pageSize: number;
}

export class AudiencePackageBindinfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AudiencePackageBindinfoGetGet(request: OpenApiV30AudiencePackageBindinfoGetGetRequest): Promise<AudiencePackageBindinfoGetV30Response> {
    const response = await this.openApiV30AudiencePackageBindinfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AudiencePackageBindinfoGetGetWithHttpInfo(request: OpenApiV30AudiencePackageBindinfoGetGetRequest): Promise<ApiResponse<AudiencePackageBindinfoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AudiencePackageBindinfoGetGet");
    }

    if (request.audiencePackageId == null) {
      throw new ApiException("Missing the required parameter 'audiencePackageId' when calling openApiV30AudiencePackageBindinfoGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30AudiencePackageBindinfoGetGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30AudiencePackageBindinfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AudiencePackageBindinfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/audience_package_bindinfo/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "audience_package_id", value: request.audiencePackageId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


