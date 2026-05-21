// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { YuntuBrandInfoGetV30Response } from "../models";


export class YuntuBrandInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuBrandInfoGetGet(yuntuBrandId: number, serviceProviderId: number): Promise<YuntuBrandInfoGetV30Response> {
    const response = await this.openApiV30YuntuBrandInfoGetGetWithHttpInfo(yuntuBrandId, serviceProviderId);
    return response.data;
  }

  async openApiV30YuntuBrandInfoGetGetWithHttpInfo(yuntuBrandId: number, serviceProviderId: number): Promise<ApiResponse<YuntuBrandInfoGetV30Response>> {
    if (yuntuBrandId == null) {
      throw new ApiException("Missing the required parameter 'yuntuBrandId' when calling openApiV30YuntuBrandInfoGetGet");
    }

    if (serviceProviderId == null) {
      throw new ApiException("Missing the required parameter 'serviceProviderId' when calling openApiV30YuntuBrandInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<YuntuBrandInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/yuntu/brand_info/get/",
      queryParams: [
        { name: "yuntu_brand_id", value: yuntuBrandId },
        { name: "service_provider_id", value: serviceProviderId }
      ]
    });
  }
}


