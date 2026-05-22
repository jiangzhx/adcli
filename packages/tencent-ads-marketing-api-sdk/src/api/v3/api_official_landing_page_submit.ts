// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_official_landing_page_submit.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OfficialLandingPageSubmitUpdateRequest, OfficialLandingPageSubmitUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OfficialLandingPageSubmitApiUpdateRequest {
  data: OfficialLandingPageSubmitUpdateRequest;
}


export class OfficialLandingPageSubmitApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: OfficialLandingPageSubmitApiUpdateRequest): Promise<OfficialLandingPageSubmitUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: OfficialLandingPageSubmitApiUpdateRequest): Promise<ApiResponse<OfficialLandingPageSubmitUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageSubmitUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/official_landing_page_submit/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


