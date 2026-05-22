// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_product_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpProductDeleteV30Request, DpaEbpProductDeleteV30Response } from "../models/index";


export interface DpaEbpProductDeleteV30ApiOpenApiV30DpaEbpProductDeletePostRequest {
  dpaEbpProductDeleteV30Request?: DpaEbpProductDeleteV30Request;
}

export class DpaEbpProductDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductDeletePost(request: DpaEbpProductDeleteV30ApiOpenApiV30DpaEbpProductDeletePostRequest): Promise<DpaEbpProductDeleteV30Response> {
    const response = await this.openApiV30DpaEbpProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductDeletePostWithHttpInfo(request: DpaEbpProductDeleteV30ApiOpenApiV30DpaEbpProductDeletePostRequest): Promise<ApiResponse<DpaEbpProductDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/product/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaEbpProductDeleteV30Request
    });
  }
}


