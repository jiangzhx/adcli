// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_official_landing_page_component.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OfficialLandingPageComponentAddRequest, OfficialLandingPageComponentAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OfficialLandingPageComponentApiAddRequest {
  data: OfficialLandingPageComponentAddRequest;
}


export class OfficialLandingPageComponentApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: OfficialLandingPageComponentApiAddRequest): Promise<OfficialLandingPageComponentAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: OfficialLandingPageComponentApiAddRequest): Promise<ApiResponse<OfficialLandingPageComponentAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageComponentAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/official_landing_page_component/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


