// Generated from oceanengine/ad_open_sdk_go api/api_star_component_create_link_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarComponentCreateLinkV2Request, StarComponentCreateLinkV2Response } from "../models/index";


export interface StarComponentCreateLinkV2ApiOpenApi2StarComponentCreateLinkPostRequest {
  starComponentCreateLinkV2Request?: StarComponentCreateLinkV2Request;
}

export class StarComponentCreateLinkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentCreateLinkPost(request: StarComponentCreateLinkV2ApiOpenApi2StarComponentCreateLinkPostRequest): Promise<StarComponentCreateLinkV2Response> {
    const response = await this.openApi2StarComponentCreateLinkPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentCreateLinkPostWithHttpInfo(request: StarComponentCreateLinkV2ApiOpenApi2StarComponentCreateLinkPostRequest): Promise<ApiResponse<StarComponentCreateLinkV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarComponentCreateLinkV2Response>({
      method: "POST",
      path: "/open_api/2/star/component/create_link/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starComponentCreateLinkV2Request
    });
  }
}


