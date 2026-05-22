// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_subsidy_account_bind.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SubsidyAccountBindAddRequest, SubsidyAccountBindAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface SubsidyAccountBindApiAddRequest {
  data: SubsidyAccountBindAddRequest;
}


export class SubsidyAccountBindApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: SubsidyAccountBindApiAddRequest): Promise<SubsidyAccountBindAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: SubsidyAccountBindApiAddRequest): Promise<ApiResponse<SubsidyAccountBindAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SubsidyAccountBindAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/subsidy_account_bind/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


