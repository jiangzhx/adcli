// Generated from oceanengine/ad_open_sdk_go api/api_star_vas_submit_export_boost_item_group_data_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarVasSubmitExportBoostItemGroupDataV2Request, StarVasSubmitExportBoostItemGroupDataV2Response } from "../models/index";


export interface StarVasSubmitExportBoostItemGroupDataV2ApiOpenApi2StarVasSubmitExportBoostItemGroupDataPostRequest {
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

  async openApi2StarVasSubmitExportBoostItemGroupDataPost(request: StarVasSubmitExportBoostItemGroupDataV2ApiOpenApi2StarVasSubmitExportBoostItemGroupDataPostRequest): Promise<StarVasSubmitExportBoostItemGroupDataV2Response> {
    const response = await this.openApi2StarVasSubmitExportBoostItemGroupDataPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasSubmitExportBoostItemGroupDataPostWithHttpInfo(request: StarVasSubmitExportBoostItemGroupDataV2ApiOpenApi2StarVasSubmitExportBoostItemGroupDataPostRequest): Promise<ApiResponse<StarVasSubmitExportBoostItemGroupDataV2Response>> {

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


