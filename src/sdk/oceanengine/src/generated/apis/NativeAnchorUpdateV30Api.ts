// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { NativeAnchorUpdateV30Request, NativeAnchorUpdateV30Response } from "../models";


export class NativeAnchorUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorUpdatePost(nativeAnchorUpdateV30Request: NativeAnchorUpdateV30Request): Promise<NativeAnchorUpdateV30Response> {
    const response = await this.openApiV30NativeAnchorUpdatePostWithHttpInfo(nativeAnchorUpdateV30Request);
    return response.data;
  }

  async openApiV30NativeAnchorUpdatePostWithHttpInfo(nativeAnchorUpdateV30Request: NativeAnchorUpdateV30Request): Promise<ApiResponse<NativeAnchorUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<NativeAnchorUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/native_anchor/update/",
      queryParams: [

      ],
      body: nativeAnchorUpdateV30Request
    });
  }
}


