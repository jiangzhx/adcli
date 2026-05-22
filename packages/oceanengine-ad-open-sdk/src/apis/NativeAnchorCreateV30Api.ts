// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { NativeAnchorCreateV30Request, NativeAnchorCreateV30Response } from "../models";


export interface OpenApiV30NativeAnchorCreatePostRequest {
  nativeAnchorCreateV30Request?: NativeAnchorCreateV30Request;
}

export class NativeAnchorCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorCreatePost(request: OpenApiV30NativeAnchorCreatePostRequest): Promise<NativeAnchorCreateV30Response> {
    const response = await this.openApiV30NativeAnchorCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30NativeAnchorCreatePostWithHttpInfo(request: OpenApiV30NativeAnchorCreatePostRequest): Promise<ApiResponse<NativeAnchorCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<NativeAnchorCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/native_anchor/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.nativeAnchorCreateV30Request
    });
  }
}


