// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseAudiosGetRequest, MuseAudiosGetResponseData } from "../models";

export interface V3MuseAudiosApiGetRequest {
  data: MuseAudiosGetRequest;
}


export class V3MuseAudiosApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3MuseAudiosApiGetRequest): Promise<MuseAudiosGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3MuseAudiosApiGetRequest): Promise<ApiResponse<MuseAudiosGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MuseAudiosGetResponseData>({
      method: "POST",
      path: "/muse_audios/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


