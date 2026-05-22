// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_claim.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsClaimUpdateRequest, LeadsClaimUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsClaimApiUpdateRequest {
  data: LeadsClaimUpdateRequest;
}


export class LeadsClaimApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: LeadsClaimApiUpdateRequest): Promise<LeadsClaimUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: LeadsClaimApiUpdateRequest): Promise<ApiResponse<LeadsClaimUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LeadsClaimUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/leads_claim/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


