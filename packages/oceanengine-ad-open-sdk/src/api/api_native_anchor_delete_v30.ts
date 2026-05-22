// Generated from oceanengine/ad_open_sdk_go api/api_native_anchor_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { NativeAnchorDeleteV30Request, NativeAnchorDeleteV30Response } from "../models/index";


export interface NativeAnchorDeleteV30ApiOpenApiV30NativeAnchorDeletePostRequest {
  nativeAnchorDeleteV30Request?: NativeAnchorDeleteV30Request;
}

export class NativeAnchorDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorDeletePost(request: NativeAnchorDeleteV30ApiOpenApiV30NativeAnchorDeletePostRequest): Promise<NativeAnchorDeleteV30Response> {
    const response = await this.openApiV30NativeAnchorDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30NativeAnchorDeletePostWithHttpInfo(request: NativeAnchorDeleteV30ApiOpenApiV30NativeAnchorDeletePostRequest): Promise<ApiResponse<NativeAnchorDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<NativeAnchorDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/native_anchor/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.nativeAnchorDeleteV30Request
    });
  }
}


