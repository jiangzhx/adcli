// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_rta_info.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RtaInfoGetRequest, RtaInfoGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface RtaInfoApiGetRequest {
  data: RtaInfoGetRequest;
}


export class RtaInfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: RtaInfoApiGetRequest): Promise<RtaInfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: RtaInfoApiGetRequest): Promise<ApiResponse<RtaInfoGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtaInfoGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rta_info/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


