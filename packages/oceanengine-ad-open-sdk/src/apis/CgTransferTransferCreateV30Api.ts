// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferTransferCreateV30Request, CgTransferTransferCreateV30Response } from "../models";


export class CgTransferTransferCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferTransferCreatePost(cgTransferTransferCreateV30Request: CgTransferTransferCreateV30Request): Promise<CgTransferTransferCreateV30Response> {
    const response = await this.openApiV30CgTransferTransferCreatePostWithHttpInfo(cgTransferTransferCreateV30Request);
    return response.data;
  }

  async openApiV30CgTransferTransferCreatePostWithHttpInfo(cgTransferTransferCreateV30Request: CgTransferTransferCreateV30Request): Promise<ApiResponse<CgTransferTransferCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<CgTransferTransferCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/cg_transfer/transfer/create/",
      queryParams: [

      ],
      body: cgTransferTransferCreateV30Request
    });
  }
}


