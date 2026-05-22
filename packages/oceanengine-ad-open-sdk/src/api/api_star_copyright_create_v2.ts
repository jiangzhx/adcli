// Generated from oceanengine/ad_open_sdk_go api/api_star_copyright_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarCopyrightCreateV2Request, StarCopyrightCreateV2Response } from "../models/index";


export interface StarCopyrightCreateV2ApiOpenApi2StarCopyrightCreatePostRequest {
  starCopyrightCreateV2Request?: StarCopyrightCreateV2Request;
}

export class StarCopyrightCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCopyrightCreatePost(request: StarCopyrightCreateV2ApiOpenApi2StarCopyrightCreatePostRequest): Promise<StarCopyrightCreateV2Response> {
    const response = await this.openApi2StarCopyrightCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarCopyrightCreatePostWithHttpInfo(request: StarCopyrightCreateV2ApiOpenApi2StarCopyrightCreatePostRequest): Promise<ApiResponse<StarCopyrightCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarCopyrightCreateV2Response>({
      method: "POST",
      path: "/open_api/2/star/copyright/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starCopyrightCreateV2Request
    });
  }
}


