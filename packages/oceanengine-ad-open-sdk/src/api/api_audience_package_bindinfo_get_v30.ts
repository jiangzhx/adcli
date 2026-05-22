// Generated from oceanengine/ad_open_sdk_go api/api_audience_package_bindinfo_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AudiencePackageBindinfoGetV30Response } from "../models/index";


export interface AudiencePackageBindinfoGetV30ApiOpenApiV30AudiencePackageBindinfoGetGetRequest {
  advertiserId: number | string;
  audiencePackageId: number | string;
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

  async openApiV30AudiencePackageBindinfoGetGet(request: AudiencePackageBindinfoGetV30ApiOpenApiV30AudiencePackageBindinfoGetGetRequest): Promise<AudiencePackageBindinfoGetV30Response> {
    const response = await this.openApiV30AudiencePackageBindinfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AudiencePackageBindinfoGetGetWithHttpInfo(request: AudiencePackageBindinfoGetV30ApiOpenApiV30AudiencePackageBindinfoGetGetRequest): Promise<ApiResponse<AudiencePackageBindinfoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.audiencePackageId == null) {
      throw new ApiException("audiencePackageId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }

    if (request.pageSize != null && Number(request.pageSize) < 10) {
      throw new ApiException("pageSize must be greater than 10");
    }

    if (request.pageSize != null && Number(request.pageSize) > 100) {
      throw new ApiException("pageSize must be less than 100");
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


