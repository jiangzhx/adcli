// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_rtaexp.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RtaexpGetRequest, RtaexpGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface RtaexpApiGetRequest {
  data: RtaexpGetRequest;
}


export class RtaexpApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: RtaexpApiGetRequest): Promise<RtaexpGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: RtaexpApiGetRequest): Promise<ApiResponse<RtaexpGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtaexpGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtaexp/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


