// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandCreateAssignV2Request, StarDemandCreateAssignV2Response } from "../models";


export class StarDemandCreateAssignV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandCreateAssignPost(starDemandCreateAssignV2Request: StarDemandCreateAssignV2Request): Promise<StarDemandCreateAssignV2Response> {
    const response = await this.openApi2StarDemandCreateAssignPostWithHttpInfo(starDemandCreateAssignV2Request);
    return response.data;
  }

  async openApi2StarDemandCreateAssignPostWithHttpInfo(starDemandCreateAssignV2Request: StarDemandCreateAssignV2Request): Promise<ApiResponse<StarDemandCreateAssignV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandCreateAssignV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/create_assign/",
      queryParams: [

      ],
      body: starDemandCreateAssignV2Request
    });
  }
}


