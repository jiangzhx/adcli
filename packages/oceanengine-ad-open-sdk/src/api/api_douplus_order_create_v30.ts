// Generated from oceanengine/ad_open_sdk_go api/api_douplus_order_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DouplusOrderCreateV30Request, DouplusOrderCreateV30Response } from "../models/index";


export interface DouplusOrderCreateV30ApiOpenApiV30DouplusOrderCreatePostRequest {
  douplusOrderCreateV30Request?: DouplusOrderCreateV30Request;
}

export class DouplusOrderCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderCreatePost(request: DouplusOrderCreateV30ApiOpenApiV30DouplusOrderCreatePostRequest): Promise<DouplusOrderCreateV30Response> {
    const response = await this.openApiV30DouplusOrderCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusOrderCreatePostWithHttpInfo(request: DouplusOrderCreateV30ApiOpenApiV30DouplusOrderCreatePostRequest): Promise<ApiResponse<DouplusOrderCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/douplus/order/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.douplusOrderCreateV30Request
    });
  }
}


