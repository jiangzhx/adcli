// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtaexpDataRoiGetRequest, RtaexpDataRoiGetResponseData } from "../models";

export interface V3RtaexpDataRoiApiGetRequest {
  data: RtaexpDataRoiGetRequest;
}


export class V3RtaexpDataRoiApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3RtaexpDataRoiApiGetRequest): Promise<RtaexpDataRoiGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3RtaexpDataRoiApiGetRequest): Promise<ApiResponse<RtaexpDataRoiGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtaexpDataRoiGetResponseData>({
      method: "POST",
      path: "/rtaexp_data_roi/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


