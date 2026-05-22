// Generated from oceanengine/ad_open_sdk_go api/api_brand_file_video_upload_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandFileVideoUploadV30Response } from "../models/index";


export interface BrandFileVideoUploadV30ApiOpenApiV30BrandFileVideoUploadPostRequest {
  advertiserId: number | string;
  videoFile: Blob;
}

export class BrandFileVideoUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandFileVideoUploadPost(request: BrandFileVideoUploadV30ApiOpenApiV30BrandFileVideoUploadPostRequest): Promise<BrandFileVideoUploadV30Response> {
    const response = await this.openApiV30BrandFileVideoUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandFileVideoUploadPostWithHttpInfo(request: BrandFileVideoUploadV30ApiOpenApiV30BrandFileVideoUploadPostRequest): Promise<ApiResponse<BrandFileVideoUploadV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.videoFile == null) {
      throw new ApiException("videoFile is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<BrandFileVideoUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/file/video/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId
      },
      files: {
        video_file: request.videoFile
      }
    });
  }
}


