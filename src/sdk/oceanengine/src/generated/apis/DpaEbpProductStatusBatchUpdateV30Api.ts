// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaEbpProductStatusBatchUpdateV30Request, DpaEbpProductStatusBatchUpdateV30Response } from "../models";


export class DpaEbpProductStatusBatchUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductStatusBatchUpdatePost(dpaEbpProductStatusBatchUpdateV30Request: DpaEbpProductStatusBatchUpdateV30Request): Promise<DpaEbpProductStatusBatchUpdateV30Response> {
    const response = await this.openApiV30DpaEbpProductStatusBatchUpdatePostWithHttpInfo(dpaEbpProductStatusBatchUpdateV30Request);
    return response.data;
  }

  async openApiV30DpaEbpProductStatusBatchUpdatePostWithHttpInfo(dpaEbpProductStatusBatchUpdateV30Request: DpaEbpProductStatusBatchUpdateV30Request): Promise<ApiResponse<DpaEbpProductStatusBatchUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductStatusBatchUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/product_status/batch_update/",
      queryParams: [

      ],
      body: dpaEbpProductStatusBatchUpdateV30Request
    });
  }
}


