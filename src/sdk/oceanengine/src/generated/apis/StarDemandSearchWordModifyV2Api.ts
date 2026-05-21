// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandSearchWordModifyV2Request, StarDemandSearchWordModifyV2Response } from "../models";


export class StarDemandSearchWordModifyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandSearchWordModifyPost(starDemandSearchWordModifyV2Request: StarDemandSearchWordModifyV2Request): Promise<StarDemandSearchWordModifyV2Response> {
    const response = await this.openApi2StarDemandSearchWordModifyPostWithHttpInfo(starDemandSearchWordModifyV2Request);
    return response.data;
  }

  async openApi2StarDemandSearchWordModifyPostWithHttpInfo(starDemandSearchWordModifyV2Request: StarDemandSearchWordModifyV2Request): Promise<ApiResponse<StarDemandSearchWordModifyV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandSearchWordModifyV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/search_word/modify/",
      queryParams: [

      ],
      body: starDemandSearchWordModifyV2Request
    });
  }
}


