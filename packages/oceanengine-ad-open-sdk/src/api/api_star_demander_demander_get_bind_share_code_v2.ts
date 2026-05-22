// Generated from oceanengine/ad_open_sdk_go api/api_star_demander_demander_get_bind_share_code_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemanderDemanderGetBindShareCodeV2Response } from "../models/index";


export interface StarDemanderDemanderGetBindShareCodeV2ApiOpenApi2StarDemanderDemanderGetBindShareCodeGetRequest {
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

  async openApi2StarDemanderDemanderGetBindShareCodeGet(request: StarDemanderDemanderGetBindShareCodeV2ApiOpenApi2StarDemanderDemanderGetBindShareCodeGetRequest): Promise<StarDemanderDemanderGetBindShareCodeV2Response> {
    const response = await this.openApi2StarDemanderDemanderGetBindShareCodeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderDemanderGetBindShareCodeGetWithHttpInfo(request: StarDemanderDemanderGetBindShareCodeV2ApiOpenApi2StarDemanderDemanderGetBindShareCodeGetRequest): Promise<ApiResponse<StarDemanderDemanderGetBindShareCodeV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.bizUid == null) {
      throw new ApiException("bizUid is required and must be specified");
    }

    if (request.bizUid != null && Array.from(String(request.bizUid)).length > 255) {
      throw new ApiException("bizUid must have less than 255 elements");
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


