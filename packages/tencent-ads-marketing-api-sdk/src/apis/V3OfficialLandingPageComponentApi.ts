// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageComponentAddRequest, OfficialLandingPageComponentAddResponseData } from "../models";

export interface V3OfficialLandingPageComponentApiAddRequest {
  data: OfficialLandingPageComponentAddRequest;
}


export class V3OfficialLandingPageComponentApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3OfficialLandingPageComponentApiAddRequest): Promise<OfficialLandingPageComponentAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3OfficialLandingPageComponentApiAddRequest): Promise<ApiResponse<OfficialLandingPageComponentAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageComponentAddResponseData>({
      method: "POST",
      path: "/official_landing_page_component/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


