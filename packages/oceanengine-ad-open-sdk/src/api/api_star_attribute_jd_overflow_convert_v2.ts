// Generated from oceanengine/ad_open_sdk_go api/api_star_attribute_jd_overflow_convert_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarAttributeJdOverflowConvertV2Request, StarAttributeJdOverflowConvertV2Response } from "../models/index";


export interface StarAttributeJdOverflowConvertV2ApiOpenApi2StarAttributeJdOverflowConvertPostRequest {
  starAttributeJdOverflowConvertV2Request?: StarAttributeJdOverflowConvertV2Request;
}

export class StarAttributeJdOverflowConvertV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttributeJdOverflowConvertPost(request: StarAttributeJdOverflowConvertV2ApiOpenApi2StarAttributeJdOverflowConvertPostRequest): Promise<StarAttributeJdOverflowConvertV2Response> {
    const response = await this.openApi2StarAttributeJdOverflowConvertPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarAttributeJdOverflowConvertPostWithHttpInfo(request: StarAttributeJdOverflowConvertV2ApiOpenApi2StarAttributeJdOverflowConvertPostRequest): Promise<ApiResponse<StarAttributeJdOverflowConvertV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarAttributeJdOverflowConvertV2Response>({
      method: "POST",
      path: "/open_api/2/star/attribute/jd_overflow_convert/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starAttributeJdOverflowConvertV2Request
    });
  }
}


