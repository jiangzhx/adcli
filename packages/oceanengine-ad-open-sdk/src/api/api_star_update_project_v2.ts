// Generated from oceanengine/ad_open_sdk_go api/api_star_update_project_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarUpdateProjectV2Request, StarUpdateProjectV2Response } from "../models/index";


export interface StarUpdateProjectV2ApiOpenApi2StarUpdateProjectPostRequest {
  starUpdateProjectV2Request?: StarUpdateProjectV2Request;
}

export class StarUpdateProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarUpdateProjectPost(request: StarUpdateProjectV2ApiOpenApi2StarUpdateProjectPostRequest): Promise<StarUpdateProjectV2Response> {
    const response = await this.openApi2StarUpdateProjectPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarUpdateProjectPostWithHttpInfo(request: StarUpdateProjectV2ApiOpenApi2StarUpdateProjectPostRequest): Promise<ApiResponse<StarUpdateProjectV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarUpdateProjectV2Response>({
      method: "POST",
      path: "/open_api/2/star/update/project/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starUpdateProjectV2Request
    });
  }
}


