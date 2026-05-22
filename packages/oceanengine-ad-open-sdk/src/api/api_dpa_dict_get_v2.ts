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
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.platformId == null) {
      throw new ApiException("platformId is required and must be specified");
    }

    if (request.platformId != null && Number(request.platformId) < 1) {
      throw new ApiException("platformId must be greater than 1");
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


