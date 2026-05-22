// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandUploadImageV30Response } from "../models";


export interface OpenApiV30BrandUploadImagePostRequest {
  advertiserId: number | string;
  imageFile: File;
}

export class BrandUploadImageV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandUploadImagePost(request: OpenApiV30BrandUploadImagePostRequest): Promise<BrandUploadImageV30Response> {
    const response = await this.openApiV30BrandUploadImagePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandUploadImagePostWithHttpInfo(request: OpenApiV30BrandUploadImagePostRequest): Promise<ApiResponse<BrandUploadImageV30Response>> {
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

      ]
    });
  }
}


