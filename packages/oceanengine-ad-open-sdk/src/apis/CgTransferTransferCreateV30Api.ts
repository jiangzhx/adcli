// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferTransferCreateV30Request, CgTransferTransferCreateV30Response } from "../models";


export interface OpenApiV30CgTransferTransferCreatePostRequest {
  cgTransferTransferCreateV30Request?: CgTransferTransferCreateV30Request;
}

export class CgTransferTransferCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferTransferCreatePost(request: OpenApiV30CgTransferTransferCreatePostRequest): Promise<CgTransferTransferCreateV30Response> {
    const response = await this.openApiV30CgTransferTransferCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferTransferCreatePostWithHttpInfo(request: OpenApiV30CgTransferTransferCreatePostRequest): Promise<ApiResponse<CgTransferTransferCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<CgTransferTransferCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/cg_transfer/transfer/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.cgTransferTransferCreateV30Request
    });
  }
}


