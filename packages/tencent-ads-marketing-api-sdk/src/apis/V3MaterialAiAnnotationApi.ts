// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialAiAnnotationAddRequest, MaterialAiAnnotationAddResponseData } from "../models";

export interface V3MaterialAiAnnotationApiAddRequest {
  data: MaterialAiAnnotationAddRequest;
}


export class V3MaterialAiAnnotationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3MaterialAiAnnotationApiAddRequest): Promise<MaterialAiAnnotationAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3MaterialAiAnnotationApiAddRequest): Promise<ApiResponse<MaterialAiAnnotationAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MaterialAiAnnotationAddResponseData>({
      method: "POST",
      path: "/material_ai_annotation/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


