// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarAttributeJdOverflowConvertV2Request, StarAttributeJdOverflowConvertV2Response } from "../models";


export class StarAttributeJdOverflowConvertV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttributeJdOverflowConvertPost(request: StarAttributeJdOverflowConvertV2Request): Promise<StarAttributeJdOverflowConvertV2Response> {
    const response = await this.openApi2StarAttributeJdOverflowConvertPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarAttributeJdOverflowConvertPostWithHttpInfo(request: StarAttributeJdOverflowConvertV2Request): Promise<ApiResponse<StarAttributeJdOverflowConvertV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarAttributeJdOverflowConvertV2Response>({
      method: "POST",
      path: "/open_api/2/star/attribute/jd_overflow_convert/",
      queryParams: [

      ],
      body: request
    });
  }
}


