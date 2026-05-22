// Generated from tencentad/marketing-api-go-sdk pkg/api/api_label_audiences.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LabelAudiencesAddRequest, LabelAudiencesAddResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface LabelAudiencesApiAddRequest {
  data: LabelAudiencesAddRequest;
}


export class LabelAudiencesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LabelAudiencesApiAddRequest): Promise<LabelAudiencesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LabelAudiencesApiAddRequest): Promise<ApiResponse<LabelAudiencesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LabelAudiencesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/label_audiences/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


