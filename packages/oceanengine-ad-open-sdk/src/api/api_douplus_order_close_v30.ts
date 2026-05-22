// Generated from oceanengine/ad_open_sdk_go api/api_douplus_order_close_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DouplusOrderCloseV30Request, DouplusOrderCloseV30Response } from "../models/index";


export interface DouplusOrderCloseV30ApiOpenApiV30DouplusOrderClosePostRequest {
  douplusOrderCloseV30Request?: DouplusOrderCloseV30Request;
}

export class DouplusOrderCloseV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderClosePost(request: DouplusOrderCloseV30ApiOpenApiV30DouplusOrderClosePostRequest): Promise<DouplusOrderCloseV30Response> {
    const response = await this.openApiV30DouplusOrderClosePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusOrderClosePostWithHttpInfo(request: DouplusOrderCloseV30ApiOpenApiV30DouplusOrderClosePostRequest): Promise<ApiResponse<DouplusOrderCloseV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderCloseV30Response>({
      method: "POST",
      path: "/open_api/v3.0/douplus/order/close/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.douplusOrderCloseV30Request
    });
  }
}


