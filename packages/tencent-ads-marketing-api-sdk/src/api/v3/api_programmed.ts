// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_programmed.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProgrammedGetRequest, ProgrammedGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProgrammedApiGetRequest {
  data: ProgrammedGetRequest;
}


export class ProgrammedApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProgrammedApiGetRequest): Promise<ProgrammedGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProgrammedApiGetRequest): Promise<ApiResponse<ProgrammedGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/programmed/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


