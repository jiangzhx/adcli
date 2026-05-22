// Generated from oceanengine/ad_open_sdk_go api/api_native_anchor_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { NativeAnchorUpdateV30Request, NativeAnchorUpdateV30Response } from "../models/index";


export interface NativeAnchorUpdateV30ApiOpenApiV30NativeAnchorUpdatePostRequest {
  nativeAnchorUpdateV30Request?: NativeAnchorUpdateV30Request;
}

export class NativeAnchorUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorUpdatePost(request: NativeAnchorUpdateV30ApiOpenApiV30NativeAnchorUpdatePostRequest): Promise<NativeAnchorUpdateV30Response> {
    const response = await this.openApiV30NativeAnchorUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30NativeAnchorUpdatePostWithHttpInfo(request: NativeAnchorUpdateV30ApiOpenApiV30NativeAnchorUpdatePostRequest): Promise<ApiResponse<NativeAnchorUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<NativeAnchorUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/native_anchor/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.nativeAnchorUpdateV30Request
    });
  }
}


