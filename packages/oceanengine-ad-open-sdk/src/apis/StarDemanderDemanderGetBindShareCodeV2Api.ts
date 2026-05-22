// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemanderDemanderGetBindShareCodeV2Response } from "../models";


export interface OpenApi2StarDemanderDemanderGetBindShareCodeGetRequest {
  starId: number | string;
  bizUid: string;
}

export class StarDemanderDemanderGetBindShareCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderDemanderGetBindShareCodeGet(request: OpenApi2StarDemanderDemanderGetBindShareCodeGetRequest): Promise<StarDemanderDemanderGetBindShareCodeV2Response> {
    const response = await this.openApi2StarDemanderDemanderGetBindShareCodeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderDemanderGetBindShareCodeGetWithHttpInfo(request: OpenApi2StarDemanderDemanderGetBindShareCodeGetRequest): Promise<ApiResponse<StarDemanderDemanderGetBindShareCodeV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderDemanderGetBindShareCodeGet");
    }

    if (request.bizUid == null) {
      throw new ApiException("Missing the required parameter 'bizUid' when calling openApi2StarDemanderDemanderGetBindShareCodeGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderDemanderGetBindShareCodeV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/demander_get_bind_share_code/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "biz_uid", value: request.bizUid }
      ]
    });
  }
}


