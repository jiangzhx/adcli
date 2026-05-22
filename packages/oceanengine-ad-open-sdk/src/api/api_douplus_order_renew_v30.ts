// Generated from oceanengine/ad_open_sdk_go api/api_douplus_order_renew_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DouplusOrderRenewV30Request, DouplusOrderRenewV30Response } from "../models/index";


export interface DouplusOrderRenewV30ApiOpenApiV30DouplusOrderRenewPostRequest {
  douplusOrderRenewV30Request?: DouplusOrderRenewV30Request;
}

export class DouplusOrderRenewV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderRenewPost(request: DouplusOrderRenewV30ApiOpenApiV30DouplusOrderRenewPostRequest): Promise<DouplusOrderRenewV30Response> {
    const response = await this.openApiV30DouplusOrderRenewPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusOrderRenewPostWithHttpInfo(request: DouplusOrderRenewV30ApiOpenApiV30DouplusOrderRenewPostRequest): Promise<ApiResponse<DouplusOrderRenewV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderRenewV30Response>({
      method: "POST",
      path: "/open_api/v3.0/douplus/order/renew/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.douplusOrderRenewV30Request
    });
  }
}


