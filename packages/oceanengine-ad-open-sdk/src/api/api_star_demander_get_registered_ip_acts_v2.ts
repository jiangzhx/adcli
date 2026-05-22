// Generated from oceanengine/ad_open_sdk_go api/api_star_demander_get_registered_ip_acts_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemanderGetRegisteredIpActsV2Response } from "../models/index";


export interface StarDemanderGetRegisteredIpActsV2ApiOpenApi2StarDemanderGetRegisteredIpActsGetRequest {
  starId: number | string;
}

export class StarDemanderGetRegisteredIpActsV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderGetRegisteredIpActsGet(request: StarDemanderGetRegisteredIpActsV2ApiOpenApi2StarDemanderGetRegisteredIpActsGetRequest): Promise<StarDemanderGetRegisteredIpActsV2Response> {
    const response = await this.openApi2StarDemanderGetRegisteredIpActsGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderGetRegisteredIpActsGetWithHttpInfo(request: StarDemanderGetRegisteredIpActsV2ApiOpenApi2StarDemanderGetRegisteredIpActsGetRequest): Promise<ApiResponse<StarDemanderGetRegisteredIpActsV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderGetRegisteredIpActsGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderGetRegisteredIpActsV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/get_registered_ip_acts/",
      queryParams: [
        { name: "star_id", value: request.starId }
      ]
    });
  }
}


