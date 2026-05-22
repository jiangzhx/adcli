// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_product_status_batch_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpProductStatusBatchUpdateV30Request, DpaEbpProductStatusBatchUpdateV30Response } from "../models/index";


export interface DpaEbpProductStatusBatchUpdateV30ApiOpenApiV30DpaEbpProductStatusBatchUpdatePostRequest {
  dpaEbpProductStatusBatchUpdateV30Request?: DpaEbpProductStatusBatchUpdateV30Request;
}

export class DpaEbpProductStatusBatchUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductStatusBatchUpdatePost(request: DpaEbpProductStatusBatchUpdateV30ApiOpenApiV30DpaEbpProductStatusBatchUpdatePostRequest): Promise<DpaEbpProductStatusBatchUpdateV30Response> {
    const response = await this.openApiV30DpaEbpProductStatusBatchUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductStatusBatchUpdatePostWithHttpInfo(request: DpaEbpProductStatusBatchUpdateV30ApiOpenApiV30DpaEbpProductStatusBatchUpdatePostRequest): Promise<ApiResponse<DpaEbpProductStatusBatchUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductStatusBatchUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/product_status/batch_update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaEbpProductStatusBatchUpdateV30Request
    });
  }
}


