// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdMaterialSuggestionV10Response } from "../models";


export interface OpenApiV10QianchuanAdMaterialSuggestionGetRequest {
  advertiserId: number | string;
  adId: number | string;
  materialIds: number | string[];
}

export class QianchuanAdMaterialSuggestionV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdMaterialSuggestionGet(request: OpenApiV10QianchuanAdMaterialSuggestionGetRequest): Promise<QianchuanAdMaterialSuggestionV10Response> {
    const response = await this.openApiV10QianchuanAdMaterialSuggestionGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdMaterialSuggestionGetWithHttpInfo(request: OpenApiV10QianchuanAdMaterialSuggestionGetRequest): Promise<ApiResponse<QianchuanAdMaterialSuggestionV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdMaterialSuggestionGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanAdMaterialSuggestionGet");
    }

    if (request.materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApiV10QianchuanAdMaterialSuggestionGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdMaterialSuggestionV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/material/suggestion/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "material_ids", value: request.materialIds, collectionFormat: "csv" }
      ]
    });
  }
}


