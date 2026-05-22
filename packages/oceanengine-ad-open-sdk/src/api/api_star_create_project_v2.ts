// Generated from oceanengine/ad_open_sdk_go api/api_star_create_project_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarCreateProjectV2Request, StarCreateProjectV2Response } from "../models/index";


export interface StarCreateProjectV2ApiOpenApi2StarCreateProjectPostRequest {
  starCreateProjectV2Request?: StarCreateProjectV2Request;
}

export class StarCreateProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCreateProjectPost(request: StarCreateProjectV2ApiOpenApi2StarCreateProjectPostRequest): Promise<StarCreateProjectV2Response> {
    const response = await this.openApi2StarCreateProjectPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarCreateProjectPostWithHttpInfo(request: StarCreateProjectV2ApiOpenApi2StarCreateProjectPostRequest): Promise<ApiResponse<StarCreateProjectV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarCreateProjectV2Response>({
      method: "POST",
      path: "/open_api/2/star/create/project/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starCreateProjectV2Request
    });
  }
}


