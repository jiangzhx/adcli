// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasSubmitExportBoostItemGroupDataV2Request, StarVasSubmitExportBoostItemGroupDataV2Response } from "../models";


export interface OpenApi2StarVasSubmitExportBoostItemGroupDataPostRequest {
  starVasSubmitExportBoostItemGroupDataV2Request?: StarVasSubmitExportBoostItemGroupDataV2Request;
}

export class StarVasSubmitExportBoostItemGroupDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasSubmitExportBoostItemGroupDataPost(request: OpenApi2StarVasSubmitExportBoostItemGroupDataPostRequest): Promise<StarVasSubmitExportBoostItemGroupDataV2Response> {
    const response = await this.openApi2StarVasSubmitExportBoostItemGroupDataPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasSubmitExportBoostItemGroupDataPostWithHttpInfo(request: OpenApi2StarVasSubmitExportBoostItemGroupDataPostRequest): Promise<ApiResponse<StarVasSubmitExportBoostItemGroupDataV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarVasSubmitExportBoostItemGroupDataV2Response>({
      method: "POST",
      path: "/open_api/2/star/vas/submit_export_boost_item_group_data/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starVasSubmitExportBoostItemGroupDataV2Request
    });
  }
}


