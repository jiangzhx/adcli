// Generated from tencentad/marketing-api-go-sdk pkg/api/api_outer_clues_contact.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OuterCluesContactUpdateRequest, OuterCluesContactUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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
      basePath: TencentAdsV13Configuration.basePath,
      path: "/outer_clues_contact/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


