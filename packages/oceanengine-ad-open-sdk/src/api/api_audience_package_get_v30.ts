// Generated from oceanengine/ad_open_sdk_go api/api_audience_package_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AudiencePackageGetV30Filtering, AudiencePackageGetV30Response } from "../models/index";


export interface AudiencePackageGetV30ApiOpenApiV30AudiencePackageGetGetRequest {
  advertiserId: number | string;
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

  async openApiV30AudiencePackageGetGet(request: AudiencePackageGetV30ApiOpenApiV30AudiencePackageGetGetRequest): Promise<AudiencePackageGetV30Response> {
    const response = await this.openApiV30AudiencePackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AudiencePackageGetGetWithHttpInfo(request: AudiencePackageGetV30ApiOpenApiV30AudiencePackageGetGetRequest): Promise<ApiResponse<AudiencePackageGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


