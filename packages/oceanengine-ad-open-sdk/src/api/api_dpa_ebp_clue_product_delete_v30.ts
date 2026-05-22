// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_clue_product_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpClueProductDeleteV30Request, DpaEbpClueProductDeleteV30Response } from "../models/index";


export interface DpaEbpClueProductDeleteV30ApiOpenApiV30DpaEbpClueProductDeletePostRequest {
  dpaEbpClueProductDeleteV30Request?: DpaEbpClueProductDeleteV30Request;
}

export class DpaEbpClueProductDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpClueProductDeletePost(request: DpaEbpClueProductDeleteV30ApiOpenApiV30DpaEbpClueProductDeletePostRequest): Promise<DpaEbpClueProductDeleteV30Response> {
    const response = await this.openApiV30DpaEbpClueProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpClueProductDeletePostWithHttpInfo(request: DpaEbpClueProductDeleteV30ApiOpenApiV30DpaEbpClueProductDeletePostRequest): Promise<ApiResponse<DpaEbpClueProductDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpClueProductDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/clue_product/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaEbpClueProductDeleteV30Request
    });
  }
}


