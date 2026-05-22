// Generated from oceanengine/ad_open_sdk_go api/api_dpa_clue_product_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaClueProductDeleteV2Request, DpaClueProductDeleteV2Response } from "../models/index";


export interface DpaClueProductDeleteV2ApiOpenApi2DpaClueProductDeletePostRequest {
  dpaClueProductDeleteV2Request?: DpaClueProductDeleteV2Request;
}

export class DpaClueProductDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductDeletePost(request: DpaClueProductDeleteV2ApiOpenApi2DpaClueProductDeletePostRequest): Promise<DpaClueProductDeleteV2Response> {
    const response = await this.openApi2DpaClueProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaClueProductDeletePostWithHttpInfo(request: DpaClueProductDeleteV2ApiOpenApi2DpaClueProductDeletePostRequest): Promise<ApiResponse<DpaClueProductDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaClueProductDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/clue_product/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaClueProductDeleteV2Request
    });
  }
}


