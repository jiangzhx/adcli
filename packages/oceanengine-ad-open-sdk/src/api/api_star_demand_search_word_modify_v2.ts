// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_search_word_modify_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandSearchWordModifyV2Request, StarDemandSearchWordModifyV2Response } from "../models/index";


export interface StarDemandSearchWordModifyV2ApiOpenApi2StarDemandSearchWordModifyPostRequest {
  starDemandSearchWordModifyV2Request?: StarDemandSearchWordModifyV2Request;
}

export class StarDemandSearchWordModifyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandSearchWordModifyPost(request: StarDemandSearchWordModifyV2ApiOpenApi2StarDemandSearchWordModifyPostRequest): Promise<StarDemandSearchWordModifyV2Response> {
    const response = await this.openApi2StarDemandSearchWordModifyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandSearchWordModifyPostWithHttpInfo(request: StarDemandSearchWordModifyV2ApiOpenApi2StarDemandSearchWordModifyPostRequest): Promise<ApiResponse<StarDemandSearchWordModifyV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemandSearchWordModifyV2Response>({
      method: "POST",
      path: "/open_api/2/star/demand/search_word/modify/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starDemandSearchWordModifyV2Request
    });
  }
}


