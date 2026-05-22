// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_rtaexp_data_roi.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RtaexpDataRoiGetRequest, RtaexpDataRoiGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface RtaexpDataRoiApiGetRequest {
  data: RtaexpDataRoiGetRequest;
}


export class RtaexpDataRoiApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: RtaexpDataRoiApiGetRequest): Promise<RtaexpDataRoiGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: RtaexpDataRoiApiGetRequest): Promise<ApiResponse<RtaexpDataRoiGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtaexpDataRoiGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtaexp_data_roi/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


