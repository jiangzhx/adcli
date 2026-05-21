// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileVideoEfficiencyGetV2Response } from "../models";


export class FileVideoEfficiencyGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoEfficiencyGetGet(advertiserId: string, materialIds: string[]): Promise<FileVideoEfficiencyGetV2Response> {
    const response = await this.openApi2FileVideoEfficiencyGetGetWithHttpInfo(advertiserId, materialIds);
    return response.data;
  }

  async openApi2FileVideoEfficiencyGetGetWithHttpInfo(advertiserId: string, materialIds: string[]): Promise<ApiResponse<FileVideoEfficiencyGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoEfficiencyGetGet");
    }

    if (materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApi2FileVideoEfficiencyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoEfficiencyGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/efficiency/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_ids", value: materialIds, collectionFormat: "csv" }
      ]
    });
  }
}


