// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OuterCluesContactUpdateRequest, OuterCluesContactUpdateResponseData } from "../models";

export interface OuterCluesContactApiUpdateRequest {
  data: OuterCluesContactUpdateRequest;
}


export class OuterCluesContactApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: OuterCluesContactApiUpdateRequest): Promise<OuterCluesContactUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: OuterCluesContactApiUpdateRequest): Promise<ApiResponse<OuterCluesContactUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<OuterCluesContactUpdateResponseData>({
      method: "POST",
      path: "/outer_clues_contact/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


