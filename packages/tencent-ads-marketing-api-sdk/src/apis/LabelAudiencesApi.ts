// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LabelAudiencesAddRequest, LabelAudiencesAddResponseData } from "../models";

export interface LabelAudiencesApiAddRequest {
  data: LabelAudiencesAddRequest;
}


export class LabelAudiencesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LabelAudiencesApiAddRequest): Promise<LabelAudiencesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LabelAudiencesApiAddRequest): Promise<ApiResponse<LabelAudiencesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LabelAudiencesAddResponseData>({
      method: "POST",
      path: "/label_audiences/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


