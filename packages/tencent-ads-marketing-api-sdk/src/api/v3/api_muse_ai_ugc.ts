// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_muse_ai_ugc.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MuseAiUgcAddRequest, MuseAiUgcAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MuseAiUgcApiAddRequest {
  data: MuseAiUgcAddRequest;
}


export class MuseAiUgcApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MuseAiUgcApiAddRequest): Promise<MuseAiUgcAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MuseAiUgcApiAddRequest): Promise<ApiResponse<MuseAiUgcAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MuseAiUgcAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/muse_ai_ugc/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


