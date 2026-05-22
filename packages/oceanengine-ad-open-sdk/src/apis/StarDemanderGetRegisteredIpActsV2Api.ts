// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemanderGetRegisteredIpActsV2Response } from "../models";


export class StarDemanderGetRegisteredIpActsV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderGetRegisteredIpActsGet(starId: number): Promise<StarDemanderGetRegisteredIpActsV2Response> {
    const response = await this.openApi2StarDemanderGetRegisteredIpActsGetWithHttpInfo(starId);
    return response.data;
  }

  async openApi2StarDemanderGetRegisteredIpActsGetWithHttpInfo(starId: number): Promise<ApiResponse<StarDemanderGetRegisteredIpActsV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderGetRegisteredIpActsGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderGetRegisteredIpActsV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/get_registered_ip_acts/",
      queryParams: [
        { name: "star_id", value: starId }
      ]
    });
  }
}


