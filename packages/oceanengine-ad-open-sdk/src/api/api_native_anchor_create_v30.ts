// Generated from oceanengine/ad_open_sdk_go api/api_native_anchor_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { NativeAnchorCreateV30Request, NativeAnchorCreateV30Response } from "../models/index";


export interface NativeAnchorCreateV30ApiOpenApiV30NativeAnchorCreatePostRequest {
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

  async openApiV30NativeAnchorCreatePost(request: NativeAnchorCreateV30ApiOpenApiV30NativeAnchorCreatePostRequest): Promise<NativeAnchorCreateV30Response> {
    const response = await this.openApiV30NativeAnchorCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30NativeAnchorCreatePostWithHttpInfo(request: NativeAnchorCreateV30ApiOpenApiV30NativeAnchorCreatePostRequest): Promise<ApiResponse<NativeAnchorCreateV30Response>> {

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


