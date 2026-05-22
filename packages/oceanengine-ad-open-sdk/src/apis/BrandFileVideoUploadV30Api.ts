// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandFileVideoUploadV30Response } from "../models";


export interface OpenApiV30BrandFileVideoUploadPostRequest {
  advertiserId: number;
  videoFile: File;
}

export class BrandFileVideoUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandFileVideoUploadPost(request: OpenApiV30BrandFileVideoUploadPostRequest): Promise<BrandFileVideoUploadV30Response> {
    const response = await this.openApiV30BrandFileVideoUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandFileVideoUploadPostWithHttpInfo(request: OpenApiV30BrandFileVideoUploadPostRequest): Promise<ApiResponse<BrandFileVideoUploadV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandFileVideoUploadPost");
    }

    if (request.videoFile == null) {
      throw new ApiException("Missing the required parameter 'videoFile' when calling openApiV30BrandFileVideoUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<BrandFileVideoUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/file/video/upload/",
      queryParams: [

      ]
    });
  }
}


