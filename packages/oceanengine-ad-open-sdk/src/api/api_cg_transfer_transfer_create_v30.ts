// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_transfer_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferTransferCreateV30Request, CgTransferTransferCreateV30Response } from "../models/index";


export interface CgTransferTransferCreateV30ApiOpenApiV30CgTransferTransferCreatePostRequest {
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

  async openApiV30CgTransferTransferCreatePost(request: CgTransferTransferCreateV30ApiOpenApiV30CgTransferTransferCreatePostRequest): Promise<CgTransferTransferCreateV30Response> {
    const response = await this.openApiV30CgTransferTransferCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferTransferCreatePostWithHttpInfo(request: CgTransferTransferCreateV30ApiOpenApiV30CgTransferTransferCreatePostRequest): Promise<ApiResponse<CgTransferTransferCreateV30Response>> {

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


