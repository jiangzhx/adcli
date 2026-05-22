// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtaInfoGetRequest, RtaInfoGetResponseData } from "../models";

export interface V3RtaInfoApiGetRequest {
  data: RtaInfoGetRequest;
}


export class V3RtaInfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3RtaInfoApiGetRequest): Promise<RtaInfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3RtaInfoApiGetRequest): Promise<ApiResponse<RtaInfoGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtaInfoGetResponseData>({
      method: "POST",
      path: "/rta_info/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


