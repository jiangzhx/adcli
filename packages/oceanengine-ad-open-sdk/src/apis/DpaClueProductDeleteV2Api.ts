// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaClueProductDeleteV2Request, DpaClueProductDeleteV2Response } from "../models";


export interface OpenApi2DpaClueProductDeletePostRequest {
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

  async openApi2DpaClueProductDeletePost(request: OpenApi2DpaClueProductDeletePostRequest): Promise<DpaClueProductDeleteV2Response> {
    const response = await this.openApi2DpaClueProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaClueProductDeletePostWithHttpInfo(request: OpenApi2DpaClueProductDeletePostRequest): Promise<ApiResponse<DpaClueProductDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaClueProductDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/clue_product/delete/",
      queryParams: [

      ],
      body: request.dpaClueProductDeleteV2Request
    });
  }
}


