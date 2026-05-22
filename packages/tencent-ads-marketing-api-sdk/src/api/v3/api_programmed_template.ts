// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_programmed_template.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProgrammedTemplateGetRequest, ProgrammedTemplateGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProgrammedTemplateApiGetRequest {
  data: ProgrammedTemplateGetRequest;
}


export class ProgrammedTemplateApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProgrammedTemplateApiGetRequest): Promise<ProgrammedTemplateGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProgrammedTemplateApiGetRequest): Promise<ApiResponse<ProgrammedTemplateGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedTemplateGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/programmed_template/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


