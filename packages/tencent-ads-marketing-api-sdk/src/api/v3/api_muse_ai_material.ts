// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_muse_ai_material.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MuseAiMaterialAddRequest, MuseAiMaterialAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MuseAiMaterialApiAddRequest {
  data: MuseAiMaterialAddRequest;
}


export class MuseAiMaterialApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MuseAiMaterialApiAddRequest): Promise<MuseAiMaterialAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MuseAiMaterialApiAddRequest): Promise<ApiResponse<MuseAiMaterialAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MuseAiMaterialAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/muse_ai_material/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


