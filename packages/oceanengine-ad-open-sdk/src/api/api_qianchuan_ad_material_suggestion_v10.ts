// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_material_suggestion_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdMaterialSuggestionV10Response } from "../models/index";


export interface QianchuanAdMaterialSuggestionV10ApiOpenApiV10QianchuanAdMaterialSuggestionGetRequest {
  advertiserId: number | string;
  adId: number | string;
  materialIds: (number | string)[];
}

export class QianchuanAdMaterialSuggestionV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdMaterialSuggestionGet(request: QianchuanAdMaterialSuggestionV10ApiOpenApiV10QianchuanAdMaterialSuggestionGetRequest): Promise<QianchuanAdMaterialSuggestionV10Response> {
    const response = await this.openApiV10QianchuanAdMaterialSuggestionGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdMaterialSuggestionGetWithHttpInfo(request: QianchuanAdMaterialSuggestionV10ApiOpenApiV10QianchuanAdMaterialSuggestionGetRequest): Promise<ApiResponse<QianchuanAdMaterialSuggestionV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adId == null) {
      throw new ApiException("adId is required and must be specified");
    }

    if (request.materialIds == null) {
      throw new ApiException("materialIds is required and must be specified");
    }

    if (request.materialIds != null && request.materialIds.length < 1) {
      throw new ApiException("materialIds must have at least 1 elements");
    }

    if (request.materialIds != null && request.materialIds.length > 50) {
      throw new ApiException("materialIds must have less than 50 elements");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdMaterialSuggestionV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/material/suggestion/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "material_ids", value: request.materialIds }
      ]
    });
  }
}


