// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageSubmitUpdateRequest, OfficialLandingPageSubmitUpdateResponseData } from "../models";

export interface V3OfficialLandingPageSubmitApiUpdateRequest {
  data: OfficialLandingPageSubmitUpdateRequest;
}


export class V3OfficialLandingPageSubmitApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: V3OfficialLandingPageSubmitApiUpdateRequest): Promise<OfficialLandingPageSubmitUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3OfficialLandingPageSubmitApiUpdateRequest): Promise<ApiResponse<OfficialLandingPageSubmitUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageSubmitUpdateResponseData>({
      method: "POST",
      path: "/official_landing_page_submit/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


