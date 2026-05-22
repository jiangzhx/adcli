// Generated from oceanengine/ad_open_sdk_go api/api_star_component_update_common_component_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarComponentUpdateCommonComponentV2Request, StarComponentUpdateCommonComponentV2Response } from "../models/index";


export interface StarComponentUpdateCommonComponentV2ApiOpenApi2StarComponentUpdateCommonComponentPostRequest {
  starComponentUpdateCommonComponentV2Request?: StarComponentUpdateCommonComponentV2Request;
}

export class StarComponentUpdateCommonComponentV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentUpdateCommonComponentPost(request: StarComponentUpdateCommonComponentV2ApiOpenApi2StarComponentUpdateCommonComponentPostRequest): Promise<StarComponentUpdateCommonComponentV2Response> {
    const response = await this.openApi2StarComponentUpdateCommonComponentPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentUpdateCommonComponentPostWithHttpInfo(request: StarComponentUpdateCommonComponentV2ApiOpenApi2StarComponentUpdateCommonComponentPostRequest): Promise<ApiResponse<StarComponentUpdateCommonComponentV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarComponentUpdateCommonComponentV2Response>({
      method: "POST",
      path: "/open_api/2/star/component/update_common_component/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starComponentUpdateCommonComponentV2Request
    });
  }
}


