// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_create_assign_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandCreateAssignV2Request, StarDemandCreateAssignV2Response } from "../models/index";


export interface StarDemandCreateAssignV2ApiOpenApi2StarDemandCreateAssignPostRequest {
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

  async openApi2StarDemandCreateAssignPost(request: StarDemandCreateAssignV2ApiOpenApi2StarDemandCreateAssignPostRequest): Promise<StarDemandCreateAssignV2Response> {
    const response = await this.openApi2StarDemandCreateAssignPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandCreateAssignPostWithHttpInfo(request: StarDemandCreateAssignV2ApiOpenApi2StarDemandCreateAssignPostRequest): Promise<ApiResponse<StarDemandCreateAssignV2Response>> {

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


