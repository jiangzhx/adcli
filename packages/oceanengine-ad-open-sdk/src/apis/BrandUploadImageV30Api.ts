// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandUploadImageV30Response } from "../models";


export class BrandUploadImageV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandUploadImagePost(advertiserId: number, imageFile: File): Promise<BrandUploadImageV30Response> {
    const response = await this.openApiV30BrandUploadImagePostWithHttpInfo(advertiserId, imageFile);
    return response.data;
  }

  async openApiV30BrandUploadImagePostWithHttpInfo(advertiserId: number, imageFile: File): Promise<ApiResponse<BrandUploadImageV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandUploadImagePost");
    }

    if (imageFile == null) {
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


