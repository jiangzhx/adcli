// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandCreateAssignV2Request, StarDemandCreateAssignV2Response } from "../models";


export interface OpenApi2StarDemandCreateAssignPostRequest {
  starDemandCreateAssignV2Request?: StarDemandCreateAssignV2Request;
}

export class StarDemandCreateAssignV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandCreateAssignPost(request: OpenApi2StarDemandCreateAssignPostRequest): Promise<StarDemandCreateAssignV2Response> {
    const response = await this.openApi2StarDemandCreateAssignPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandCreateAssignPostWithHttpInfo(request: OpenApi2StarDemandCreateAssignPostRequest): Promise<ApiResponse<StarDemandCreateAssignV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandCreateAssignV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/create_assign/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starDemandCreateAssignV2Request
    });
  }
}


