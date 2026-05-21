// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAdMaterialSuggestionV10Response } from "../models";


export class QianchuanAdMaterialSuggestionV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdMaterialSuggestionGet(advertiserId: number, adId: number, materialIds: number[]): Promise<QianchuanAdMaterialSuggestionV10Response> {
    const response = await this.openApiV10QianchuanAdMaterialSuggestionGetWithHttpInfo(advertiserId, adId, materialIds);
    return response.data;
  }

  async openApiV10QianchuanAdMaterialSuggestionGetWithHttpInfo(advertiserId: number, adId: number, materialIds: number[]): Promise<ApiResponse<QianchuanAdMaterialSuggestionV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdMaterialSuggestionGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanAdMaterialSuggestionGet");
    }

    if (materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApiV10QianchuanAdMaterialSuggestionGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdMaterialSuggestionV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/material/suggestion/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
        { name: "material_ids", value: materialIds, collectionFormat: "csv" }
      ]
    });
  }
}


