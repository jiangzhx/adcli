// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DouplusOrderRenewV30Request, DouplusOrderRenewV30Response } from "../models";


export class DouplusOrderRenewV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderRenewPost(douplusOrderRenewV30Request: DouplusOrderRenewV30Request): Promise<DouplusOrderRenewV30Response> {
    const response = await this.openApiV30DouplusOrderRenewPostWithHttpInfo(douplusOrderRenewV30Request);
    return response.data;
  }

  async openApiV30DouplusOrderRenewPostWithHttpInfo(douplusOrderRenewV30Request: DouplusOrderRenewV30Request): Promise<ApiResponse<DouplusOrderRenewV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderRenewV30Response>({
      method: "POST",
      path: "/open_api/v3.0/douplus/order/renew/",
      queryParams: [

      ],
      body: douplusOrderRenewV30Request
    });
  }
}


