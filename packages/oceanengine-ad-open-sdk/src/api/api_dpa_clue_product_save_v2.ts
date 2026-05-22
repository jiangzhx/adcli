// Generated from oceanengine/ad_open_sdk_go api/api_dpa_clue_product_save_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaClueProductSaveV2Request, DpaClueProductSaveV2Response } from "../models/index";


export interface DpaClueProductSaveV2ApiOpenApi2DpaClueProductSavePostRequest {
  dpaClueProductSaveV2Request?: DpaClueProductSaveV2Request;
}

export class DpaClueProductSaveV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductSavePost(request: DpaClueProductSaveV2ApiOpenApi2DpaClueProductSavePostRequest): Promise<DpaClueProductSaveV2Response> {
    const response = await this.openApi2DpaClueProductSavePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaClueProductSavePostWithHttpInfo(request: DpaClueProductSaveV2ApiOpenApi2DpaClueProductSavePostRequest): Promise<ApiResponse<DpaClueProductSaveV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaClueProductSaveV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/clue_product/save/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaClueProductSaveV2Request
    });
  }
}


