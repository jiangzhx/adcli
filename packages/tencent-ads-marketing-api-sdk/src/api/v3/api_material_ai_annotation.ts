// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_material_ai_annotation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MaterialAiAnnotationAddRequest, MaterialAiAnnotationAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MaterialAiAnnotationApiAddRequest {
  data: MaterialAiAnnotationAddRequest;
}


export class MaterialAiAnnotationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MaterialAiAnnotationApiAddRequest): Promise<MaterialAiAnnotationAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MaterialAiAnnotationApiAddRequest): Promise<ApiResponse<MaterialAiAnnotationAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MaterialAiAnnotationAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_ai_annotation/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


