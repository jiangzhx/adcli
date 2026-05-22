// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseAiUgcAddRequest, MuseAiUgcAddResponseData } from "../models";

export interface V3MuseAiUgcApiAddRequest {
  data: MuseAiUgcAddRequest;
}


export class V3MuseAiUgcApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3MuseAiUgcApiAddRequest): Promise<MuseAiUgcAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3MuseAiUgcApiAddRequest): Promise<ApiResponse<MuseAiUgcAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MuseAiUgcAddResponseData>({
      method: "POST",
      path: "/muse_ai_ugc/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


