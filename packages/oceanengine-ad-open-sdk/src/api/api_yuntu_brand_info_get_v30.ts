// Generated from oceanengine/ad_open_sdk_go api/api_yuntu_brand_info_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { YuntuBrandInfoGetV30Response } from "../models/index";


export interface YuntuBrandInfoGetV30ApiOpenApiV30YuntuBrandInfoGetGetRequest {
  yuntuBrandId: number | string;
  serviceProviderId: number | string;
}

export class YuntuBrandInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuBrandInfoGetGet(request: YuntuBrandInfoGetV30ApiOpenApiV30YuntuBrandInfoGetGetRequest): Promise<YuntuBrandInfoGetV30Response> {
    const response = await this.openApiV30YuntuBrandInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuBrandInfoGetGetWithHttpInfo(request: YuntuBrandInfoGetV30ApiOpenApiV30YuntuBrandInfoGetGetRequest): Promise<ApiResponse<YuntuBrandInfoGetV30Response>> {
    if (request.yuntuBrandId == null) {
      throw new ApiException("Missing the required parameter 'yuntuBrandId' when calling openApiV30YuntuBrandInfoGetGet");
    }

    if (request.serviceProviderId == null) {
      throw new ApiException("Missing the required parameter 'serviceProviderId' when calling openApiV30YuntuBrandInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<YuntuBrandInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/yuntu/brand_info/get/",
      queryParams: [
        { name: "yuntu_brand_id", value: request.yuntuBrandId },
        { name: "service_provider_id", value: request.serviceProviderId }
      ]
    });
  }
}


