// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_official_landing_page.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OfficialLandingPageDeleteRequest, OfficialLandingPageDeleteResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OfficialLandingPageApiDeleteRequest {
  data: OfficialLandingPageDeleteRequest;
}


export class OfficialLandingPageApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async delete(request: OfficialLandingPageApiDeleteRequest): Promise<OfficialLandingPageDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: OfficialLandingPageApiDeleteRequest): Promise<ApiResponse<OfficialLandingPageDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<OfficialLandingPageDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/official_landing_page/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


