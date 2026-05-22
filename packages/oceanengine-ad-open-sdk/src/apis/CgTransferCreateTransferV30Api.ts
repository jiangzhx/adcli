// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferCreateTransferV30Request, CgTransferCreateTransferV30Response } from "../models";


export class CgTransferCreateTransferV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferCreateTransferPost(cgTransferCreateTransferV30Request: CgTransferCreateTransferV30Request): Promise<CgTransferCreateTransferV30Response> {
    const response = await this.openApiV30CgTransferCreateTransferPostWithHttpInfo(cgTransferCreateTransferV30Request);
    return response.data;
  }

  async openApiV30CgTransferCreateTransferPostWithHttpInfo(cgTransferCreateTransferV30Request: CgTransferCreateTransferV30Request): Promise<ApiResponse<CgTransferCreateTransferV30Response>> {

    return this.apiClient.requestWithHttpInfo<CgTransferCreateTransferV30Response>({
      method: "POST",
      path: "/open_api/v3.0/cg_transfer/create_transfer/",
      queryParams: [

      ],
      body: cgTransferCreateTransferV30Request
    });
  }
}


