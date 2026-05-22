// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedTemplateGetRequest, ProgrammedTemplateGetResponseData } from "../models";

export interface V3ProgrammedTemplateApiGetRequest {
  data: ProgrammedTemplateGetRequest;
}


export class V3ProgrammedTemplateApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ProgrammedTemplateApiGetRequest): Promise<ProgrammedTemplateGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ProgrammedTemplateApiGetRequest): Promise<ApiResponse<ProgrammedTemplateGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedTemplateGetResponseData>({
      method: "POST",
      path: "/programmed_template/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


