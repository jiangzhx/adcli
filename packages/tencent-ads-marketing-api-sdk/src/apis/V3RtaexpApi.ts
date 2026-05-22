// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtaexpGetRequest, RtaexpGetResponseData } from "../models";

export interface V3RtaexpApiGetRequest {
  data: RtaexpGetRequest;
}


export class V3RtaexpApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3RtaexpApiGetRequest): Promise<RtaexpGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3RtaexpApiGetRequest): Promise<ApiResponse<RtaexpGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtaexpGetResponseData>({
      method: "POST",
      path: "/rtaexp/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


