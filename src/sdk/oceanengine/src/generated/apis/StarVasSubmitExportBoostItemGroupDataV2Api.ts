// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarVasSubmitExportBoostItemGroupDataV2Request, StarVasSubmitExportBoostItemGroupDataV2Response } from "../models";


export class StarVasSubmitExportBoostItemGroupDataV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasSubmitExportBoostItemGroupDataPost(starVasSubmitExportBoostItemGroupDataV2Request: StarVasSubmitExportBoostItemGroupDataV2Request): Promise<StarVasSubmitExportBoostItemGroupDataV2Response> {
    const response = await this.openApi2StarVasSubmitExportBoostItemGroupDataPostWithHttpInfo(starVasSubmitExportBoostItemGroupDataV2Request);
    return response.data;
  }

  async openApi2StarVasSubmitExportBoostItemGroupDataPostWithHttpInfo(starVasSubmitExportBoostItemGroupDataV2Request: StarVasSubmitExportBoostItemGroupDataV2Request): Promise<ApiResponse<StarVasSubmitExportBoostItemGroupDataV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarVasSubmitExportBoostItemGroupDataV2Response>({
      method: "POST",
      path: "/open_api/2/star/vas/submit_export_boost_item_group_data/",
      queryParams: [

      ],
      body: starVasSubmitExportBoostItemGroupDataV2Request
    });
  }
}


