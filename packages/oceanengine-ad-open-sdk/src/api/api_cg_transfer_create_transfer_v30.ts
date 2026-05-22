// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_create_transfer_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferCreateTransferV30Request, CgTransferCreateTransferV30Response } from "../models/index";


export interface CgTransferCreateTransferV30ApiOpenApiV30CgTransferCreateTransferPostRequest {
  cgTransferCreateTransferV30Request?: CgTransferCreateTransferV30Request;
}

export class CgTransferCreateTransferV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferCreateTransferPost(request: CgTransferCreateTransferV30ApiOpenApiV30CgTransferCreateTransferPostRequest): Promise<CgTransferCreateTransferV30Response> {
    const response = await this.openApiV30CgTransferCreateTransferPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferCreateTransferPostWithHttpInfo(request: CgTransferCreateTransferV30ApiOpenApiV30CgTransferCreateTransferPostRequest): Promise<ApiResponse<CgTransferCreateTransferV30Response>> {

    return this.apiClient.requestWithHttpInfo<CgTransferCreateTransferV30Response>({
      method: "POST",
      path: "/open_api/v3.0/cg_transfer/create_transfer/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.cgTransferCreateTransferV30Request
    });
  }
}


