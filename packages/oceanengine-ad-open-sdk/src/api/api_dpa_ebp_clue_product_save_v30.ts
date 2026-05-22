// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_clue_product_save_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpClueProductSaveV30Request, DpaEbpClueProductSaveV30Response } from "../models/index";


export interface DpaEbpClueProductSaveV30ApiOpenApiV30DpaEbpClueProductSavePostRequest {
  dpaEbpClueProductSaveV30Request?: DpaEbpClueProductSaveV30Request;
}

export class DpaEbpClueProductSaveV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpClueProductSavePost(request: DpaEbpClueProductSaveV30ApiOpenApiV30DpaEbpClueProductSavePostRequest): Promise<DpaEbpClueProductSaveV30Response> {
    const response = await this.openApiV30DpaEbpClueProductSavePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpClueProductSavePostWithHttpInfo(request: DpaEbpClueProductSaveV30ApiOpenApiV30DpaEbpClueProductSavePostRequest): Promise<ApiResponse<DpaEbpClueProductSaveV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpClueProductSaveV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/clue_product/save/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaEbpClueProductSaveV30Request
    });
  }
}


