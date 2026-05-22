// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ImageProcessingAddRequest, ImageProcessingAddResponseData } from "../models";

export interface V3ImageProcessingApiAddRequest {
  data: ImageProcessingAddRequest;
}


export class V3ImageProcessingApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3ImageProcessingApiAddRequest): Promise<ImageProcessingAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3ImageProcessingApiAddRequest): Promise<ApiResponse<ImageProcessingAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ImageProcessingAddResponseData>({
      method: "POST",
      path: "/image_processing/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


