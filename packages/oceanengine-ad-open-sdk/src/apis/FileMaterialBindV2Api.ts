// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileMaterialBindV2Request, FileMaterialBindV2Response } from "../models";


export interface OpenApi2FileMaterialBindPostRequest {
  fileMaterialBindV2Request?: FileMaterialBindV2Request;
}

export class FileMaterialBindV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileMaterialBindPost(request: OpenApi2FileMaterialBindPostRequest): Promise<FileMaterialBindV2Response> {
    const response = await this.openApi2FileMaterialBindPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileMaterialBindPostWithHttpInfo(request: OpenApi2FileMaterialBindPostRequest): Promise<ApiResponse<FileMaterialBindV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileMaterialBindV2Response>({
      method: "POST",
      path: "/open_api/2/file/material/bind/",
      queryParams: [

      ],
      body: request.fileMaterialBindV2Request
    });
  }
}


