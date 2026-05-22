// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileMaterialDetailV2Response } from "../models";


export class FileMaterialDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileMaterialDetailGet(advertiserId: number, materialIds: number[]): Promise<FileMaterialDetailV2Response> {
    const response = await this.openApi2FileMaterialDetailGetWithHttpInfo(advertiserId, materialIds);
    return response.data;
  }

  async openApi2FileMaterialDetailGetWithHttpInfo(advertiserId: number, materialIds: number[]): Promise<ApiResponse<FileMaterialDetailV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileMaterialDetailGet");
    }

    if (materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApi2FileMaterialDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<FileMaterialDetailV2Response>({
      method: "GET",
      path: "/open_api/2/file/material/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_ids", value: materialIds, collectionFormat: "csv" }
      ]
    });
  }
}


