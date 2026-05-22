// Generated from oceanengine/ad_open_sdk_go api/api_dpa_meta_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaMetaGetV2Response } from "../models/index";


export interface DpaMetaGetV2ApiOpenApi2DpaMetaGetGetRequest {
  advertiserId: number | string;
  platformId: number | string;
  indexable?: number;
  extractable?: number;
  industry?: number;
  status?: number;
  mediaType?: number;
}

export class DpaMetaGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaMetaGetGet(request: DpaMetaGetV2ApiOpenApi2DpaMetaGetGetRequest): Promise<DpaMetaGetV2Response> {
    const response = await this.openApi2DpaMetaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaMetaGetGetWithHttpInfo(request: DpaMetaGetV2ApiOpenApi2DpaMetaGetGetRequest): Promise<ApiResponse<DpaMetaGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.platformId == null) {
      throw new ApiException("platformId is required and must be specified");
    }

    if (request.platformId != null && Number(request.platformId) < 1) {
      throw new ApiException("platformId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<DpaMetaGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/meta/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "platform_id", value: request.platformId },
        { name: "indexable", value: request.indexable },
        { name: "extractable", value: request.extractable },
        { name: "industry", value: request.industry },
        { name: "status", value: request.status },
        { name: "mediaType", value: request.mediaType }
      ]
    });
  }
}


