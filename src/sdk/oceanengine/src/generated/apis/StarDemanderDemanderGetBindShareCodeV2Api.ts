// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemanderDemanderGetBindShareCodeV2Response } from "../models";


export class StarDemanderDemanderGetBindShareCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderDemanderGetBindShareCodeGet(starId: number, bizUid: string): Promise<StarDemanderDemanderGetBindShareCodeV2Response> {
    const response = await this.openApi2StarDemanderDemanderGetBindShareCodeGetWithHttpInfo(starId, bizUid);
    return response.data;
  }

  async openApi2StarDemanderDemanderGetBindShareCodeGetWithHttpInfo(starId: number, bizUid: string): Promise<ApiResponse<StarDemanderDemanderGetBindShareCodeV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderDemanderGetBindShareCodeGet");
    }

    if (bizUid == null) {
      throw new ApiException("Missing the required parameter 'bizUid' when calling openApi2StarDemanderDemanderGetBindShareCodeGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderDemanderGetBindShareCodeV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/demander_get_bind_share_code/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "biz_uid", value: bizUid }
      ]
    });
  }
}


