// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { NativeAnchorDeleteV30Request, NativeAnchorDeleteV30Response } from "../models";


export class NativeAnchorDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorDeletePost(nativeAnchorDeleteV30Request: NativeAnchorDeleteV30Request): Promise<NativeAnchorDeleteV30Response> {
    const response = await this.openApiV30NativeAnchorDeletePostWithHttpInfo(nativeAnchorDeleteV30Request);
    return response.data;
  }

  async openApiV30NativeAnchorDeletePostWithHttpInfo(nativeAnchorDeleteV30Request: NativeAnchorDeleteV30Request): Promise<ApiResponse<NativeAnchorDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<NativeAnchorDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/native_anchor/delete/",
      queryParams: [

      ],
      body: nativeAnchorDeleteV30Request
    });
  }
}


