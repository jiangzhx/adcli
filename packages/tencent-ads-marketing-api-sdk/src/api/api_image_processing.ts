// Generated from tencentad/marketing-api-go-sdk pkg/api/api_image_processing.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ImageProcessingAddRequest, ImageProcessingAddResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface ImageProcessingApiAddRequest {
  data: ImageProcessingAddRequest;
}


export class ImageProcessingApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ImageProcessingApiAddRequest): Promise<ImageProcessingAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ImageProcessingApiAddRequest): Promise<ApiResponse<ImageProcessingAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ImageProcessingAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/image_processing/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


