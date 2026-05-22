// Generated from oceanengine/ad_open_sdk_go api/api_star_component_update_link_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarComponentUpdateLinkV2Request, StarComponentUpdateLinkV2Response } from "../models/index";


export interface StarComponentUpdateLinkV2ApiOpenApi2StarComponentUpdateLinkPostRequest {
  starComponentUpdateLinkV2Request?: StarComponentUpdateLinkV2Request;
}

export class StarComponentUpdateLinkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentUpdateLinkPost(request: StarComponentUpdateLinkV2ApiOpenApi2StarComponentUpdateLinkPostRequest): Promise<StarComponentUpdateLinkV2Response> {
    const response = await this.openApi2StarComponentUpdateLinkPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentUpdateLinkPostWithHttpInfo(request: StarComponentUpdateLinkV2ApiOpenApi2StarComponentUpdateLinkPostRequest): Promise<ApiResponse<StarComponentUpdateLinkV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarComponentUpdateLinkV2Response>({
      method: "POST",
      path: "/open_api/2/star/component/update_link/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starComponentUpdateLinkV2Request
    });
  }
}


