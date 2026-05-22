// Generated from oceanengine/ad_open_sdk_go api/api_dpa_dict_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaDictGetV2Response } from "../models/index";


export interface DpaDictGetV2ApiOpenApi2DpaDictGetGetRequest {
  advertiserId: number | string;
  platformId: number | string;
}

export class DpaDictGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaDictGetGet(request: DpaDictGetV2ApiOpenApi2DpaDictGetGetRequest): Promise<DpaDictGetV2Response> {
    const response = await this.openApi2DpaDictGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaDictGetGetWithHttpInfo(request: DpaDictGetV2ApiOpenApi2DpaDictGetGetRequest): Promise<ApiResponse<DpaDictGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaDictGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApi2DpaDictGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaDictGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/dict/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "platform_id", value: request.platformId }
      ]
    });
  }
}


