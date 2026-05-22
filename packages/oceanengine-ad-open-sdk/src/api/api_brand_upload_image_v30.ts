// Generated from oceanengine/ad_open_sdk_go api/api_brand_upload_image_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandUploadImageV30Response } from "../models/index";


export interface BrandUploadImageV30ApiOpenApiV30BrandUploadImagePostRequest {
  advertiserId: number | string;
  imageFile: Blob;
}

export class BrandUploadImageV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandUploadImagePost(request: BrandUploadImageV30ApiOpenApiV30BrandUploadImagePostRequest): Promise<BrandUploadImageV30Response> {
    const response = await this.openApiV30BrandUploadImagePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandUploadImagePostWithHttpInfo(request: BrandUploadImageV30ApiOpenApiV30BrandUploadImagePostRequest): Promise<ApiResponse<BrandUploadImageV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandUploadImagePost");
    }

    if (request.imageFile == null) {
      throw new ApiException("Missing the required parameter 'imageFile' when calling openApiV30BrandUploadImagePost");
    }
    return this.apiClient.requestWithHttpInfo<BrandUploadImageV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/upload_image/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId
      },
      files: {
        image_file: request.imageFile
      }
    });
  }
}


