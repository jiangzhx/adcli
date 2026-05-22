// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_product_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpProductUpdateV30Request, DpaEbpProductUpdateV30Response } from "../models/index";


export interface DpaEbpProductUpdateV30ApiOpenApiV30DpaEbpProductUpdatePostRequest {
  dpaEbpProductUpdateV30Request?: DpaEbpProductUpdateV30Request;
}

export class DpaEbpProductUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductUpdatePost(request: DpaEbpProductUpdateV30ApiOpenApiV30DpaEbpProductUpdatePostRequest): Promise<DpaEbpProductUpdateV30Response> {
    const response = await this.openApiV30DpaEbpProductUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductUpdatePostWithHttpInfo(request: DpaEbpProductUpdateV30ApiOpenApiV30DpaEbpProductUpdatePostRequest): Promise<ApiResponse<DpaEbpProductUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/product/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaEbpProductUpdateV30Request
    });
  }
}


