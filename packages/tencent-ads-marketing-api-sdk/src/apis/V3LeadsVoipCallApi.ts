// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsVoipCallAddRequest, LeadsVoipCallAddResponseData } from "../models";

export interface V3LeadsVoipCallApiAddRequest {
  data: LeadsVoipCallAddRequest;
}


export class V3LeadsVoipCallApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3LeadsVoipCallApiAddRequest): Promise<LeadsVoipCallAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3LeadsVoipCallApiAddRequest): Promise<ApiResponse<LeadsVoipCallAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LeadsVoipCallAddResponseData>({
      method: "POST",
      path: "/leads_voip_call/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


