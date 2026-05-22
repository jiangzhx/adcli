// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaClueProductSaveV2Request, DpaClueProductSaveV2Response } from "../models";


export class DpaClueProductSaveV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductSavePost(dpaClueProductSaveV2Request: DpaClueProductSaveV2Request): Promise<DpaClueProductSaveV2Response> {
    const response = await this.openApi2DpaClueProductSavePostWithHttpInfo(dpaClueProductSaveV2Request);
    return response.data;
  }

  async openApi2DpaClueProductSavePostWithHttpInfo(dpaClueProductSaveV2Request: DpaClueProductSaveV2Request): Promise<ApiResponse<DpaClueProductSaveV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaClueProductSaveV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/clue_product/save/",
      queryParams: [

      ],
      body: dpaClueProductSaveV2Request
    });
  }
}


